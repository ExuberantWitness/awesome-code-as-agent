# Open Awesome Code as Agent Cube

Open the 3D interactive knowledge cube for the "Code as Agent" research landscape in the user's browser.

## When to use

- User asks to "open the cube", "show the visualization", "view the research map", "look at the papers", "打开立方体", "看效果", or similar
- User wants to browse or interact with the paper database
- User is discussing the taxonomy and wants to see it visually

## Instructions

1. Determine the correct path to the cube HTML file. Check these locations in order:
   - `awesome-code-as-agent/code-as-policy-cube.html` (relative to current project)
   - `code-as-policy-cube.html` (in current directory)
   - Ask the user for the path if not found

2. Open the file in the default browser:
   - **Windows**: `cmd /c start "" "<absolute-path>"`
   - **macOS**: `open <absolute-path>`
   - **Linux**: `xdg-open <absolute-path>`

3. Tell the user:
   - The cube requires internet (Three.js loads from CDN)
   - Drag to rotate, scroll to zoom, right-drag to pan
   - Click any cube to see papers grouped by the 4 runtime quadrants
   - Click paper titles in popups to jump to the database view
   - Use top-left filters to isolate a specific update level

## URL Hash Shortcuts

- Default: 3D cube view
- `#db`: opens directly in Paper Database view
- `#reset`: resets camera angle

## What the user will see

A 3D lattice where:
- **X axis** (left-right) = 10 research scenes (Policy, Action, Reward, Skill, Constraint, World, Design, Reasoning, Agent-Self, Research)
- **Z axis** (front-back) = 7 research directions (One-shot, Closed-loop, Evolutionary, Skill, Multi-agent, World Model, Memory)
- **Y axis** (height) = 5 update capability levels (L0 Frozen → L4 RSI)
- Each colored cube = a cell containing papers; size ≈ paper count; color = scene
- Empty cells show "缺类" (gap) when clicked — these are research opportunities
