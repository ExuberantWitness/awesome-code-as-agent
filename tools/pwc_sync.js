// Papers-with-Code enrichment sync.
// Reads data/papers.json, queries the public PwC catalog (paperswithcode.co/api/v1),
// writes data/pwc-enrichment.json (citations/repos/datasets per arXiv id)
// and data/candidates.json (papers found by keyword search that are NOT yet in our DB).
// Usage: node tools/pwc_sync.js [--max-age-days=7]   (run from the repo root)
const fs=require('fs');
const path=require('path');
const ROOT=path.join(__dirname,'..');
const DB=JSON.parse(fs.readFileSync(path.join(ROOT,'data','papers.json'),'utf8'));
const API='https://paperswithcode.co/api/v1';
const MAX_AGE_DAYS=(parseInt((process.argv.find(a=>a.startsWith('--max-age-days='))||'').split('=')[1],10))||7;

const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const arxivIdOf=l=>{const m=String(l||'').match(/arxiv\.org\/(?:abs|html|pdf)\/(\d{4}\.\d{4,5})(?:v\d+)?/);return m?m[1]:null;};

async function getJSON(url,timeoutMs){
  for(let attempt=1;attempt<=2;attempt++){
    try{
      const r=await fetch(url,{signal:AbortSignal.timeout(timeoutMs||15000),headers:{'Accept':'application/json'}});
      if(r.status===429){const ra=parseInt(r.headers.get('retry-after')||'2',10);await sleep(ra*1000);continue;}
      if(r.status===404)return {status:404};
      if(!r.ok)throw new Error('HTTP '+r.status);
      return {status:200,data:await r.json()};
    }catch(e){
      if(attempt===2)return {status:'ERR',err:e.message};
      await sleep(1500);
    }
  }
  return {status:'ERR'};
}

function extractPaper(j){
  const repos=(j.code_repositories||[]).map(r=>({url:r.url,official:!!r.official,stars:r.stars??null}));
  const datasets=(j.datasets||[]).map(d=>({name:d.name,url:d.url??null}));
  return {pwc_id:j.id??null,title:j.title??null,cites:j.citation_count??j.citation_count_estimate??null,arxiv:j.arxiv_id??null,repos,datasets};
}

async function main(){
  const enrichmentPath=path.join(ROOT,'data','pwc-enrichment.json');
  let prev={};
  try{prev=JSON.parse(fs.readFileSync(enrichmentPath,'utf8')).papers||{};}catch(e){}
  const targets=[];
  for(const p of DB){
    const id=arxivIdOf(p.l);
    if(!id)continue;
    const old=prev[id];
    const fresh=old&&old.synced_at&&(Date.now()-new Date(old.synced_at).getTime())<MAX_AGE_DAYS*86400000;
    if(!fresh)targets.push({id,name:p.n});
  }
  console.log('DB papers: '+DB.length+' | arXiv-linked: '+DB.filter(p=>arxivIdOf(p.l)).length+' | to sync: '+targets.length+' (skip fresh <'+MAX_AGE_DAYS+'d)');
  const out={...prev};
  let ok=0,miss=0,err=0;
  for(let i=0;i<targets.length;i++){
    const t=targets[i];
    const r=await getJSON(API+'/papers/arxiv/'+t.id+'?include_resources=true');
    if(r.status===200){out[t.id]={...extractPaper(r.data),status:'matched',synced_at:new Date().toISOString()};ok++;}
    else if(r.status===404){out[t.id]={status:'missing',synced_at:new Date().toISOString()};miss++;}
    else{out[t.id]={...(prev[t.id]||{}),status:'error:'+String(r.err||r.status).slice(0,40),synced_at:new Date().toISOString()};err++;}
    if((i+1)%50===0)console.log('  progress '+(i+1)+'/'+targets.length);
    await sleep(600);
  }
  // ---- candidate discovery via keyword search ----
  const QUERIES=['recursive self-improvement','agent harness self-improvement','self-evolving LLM agent','code as policy language model','world model agent learning','agent memory self-evolving','reward model rubric','autonomous research agent'];
  const known=new Set(DB.map(p=>arxivIdOf(p.l)).filter(Boolean));
  const candidates={generated_at:new Date().toISOString(),papers:[]};
  const seen=new Set();
  for(const q of QUERIES){
    const r=await getJSON(API+'/papers/search?mode=keyword&q='+encodeURIComponent(q)+'&limit=20');
    if(r.status!==200){console.log('search failed for "'+q+'"');continue;}
    const arr=r.data.results||r.data.papers||[];
    for(const p of arr){
      const id=p.arxiv_id||arxivIdOf(p.url||'');
      if(!id||known.has(id)||seen.has(id))continue;
      seen.add(id);
      candidates.papers.push({arxiv_id:id,title:p.title,query:q,found_at:new Date().toISOString()});
    }
    await sleep(1100);
  }
  candidates.papers.sort((a,b)=>a.query.localeCompare(b.query));
  const stats={generated_at:new Date().toISOString(),db_total:DB.length,arxiv_linked:DB.filter(p=>arxivIdOf(p.l)).length,matched:Object.values(out).filter(x=>x.status==='matched').length,missing:Object.values(out).filter(x=>x.status==='missing').length,error:Object.values(out).filter(x=>String(x.status).startsWith('error')).length,candidates_new:candidates.papers.length};
  fs.writeFileSync(enrichmentPath,JSON.stringify({stats,papers:out},null,1));
  fs.writeFileSync(path.join(ROOT,'data','candidates.json'),JSON.stringify(candidates,null,1));
  console.log('DONE sync: ok='+ok+' missing='+miss+' err='+err+' | cumulative matched='+stats.matched+'/'+stats.arxiv_linked+' | new candidates='+stats.candidates_new);
  console.log('first 10 candidates:');candidates.papers.slice(0,10).forEach(c=>console.log('  ['+c.query+'] '+c.title.slice(0,70)+' ('+c.arxiv_id+')'));
}
main().catch(e=>{console.error('FATAL '+e.message);process.exit(1);});
