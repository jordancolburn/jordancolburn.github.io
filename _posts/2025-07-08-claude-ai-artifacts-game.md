---
published: true
layout: post
date: "2025-07-07 08:30:00 +0500."
permalink: "/:year/:month/:day/:title/"
title: "AI Game Dev By The Pool?"
---

I recently experimented with **Claude.ai** artifacts and was super impressed with it's simplicity. It gave me an idea: Could I make
an app on my phone even while just hanging out at the pool? I've experimented with js games
before in [while teaching coding](/2016/08/29/teaching-code/) to make some
simple JavaScript games, but maybe AI was a fun way to dip my toe into those
waters even further.

After only three short prompts into the claude website of my phone I already had a simple version of a diving board jump
game running in the browser:

<iframe src="/assets/claude-artifacts/early-prototype.html" width="100%" height="1000" title="Early prototype"></iframe>

<p class="text-center"><a href="https://claude.ai/public/artifacts/57078a5a-83c7-47fe-9b1d-5c69491cbc7f">View the early prototype on Claude.ai</a></p>
The prompts were:

* "Help me make a JavaScript game. I want a springy stick figure diving board game the stick figure can jump in a direction and force of the users choosing (2d matrix of horizontal and vertical forces). The user has to land inside a small lifering in the water. The user can front flip, back flip and spin. The user gets points for flips combos, spins and accuracy close to the bouy. If the user just missed going through the hole, but hits it, the user drowns."
* "Can you make the screen more mobile friendly and also offer buttons on the screen as well as key presses so it can work with a phone"
* "Add a drowning animation if the ring isn't hit"


The "AI Unhelpful Valley", as I call it, soon appeared after the fast start. AI (to me at least) seems great at quick prototpyes and refining established ideas, but often seems to struggle in the middle ground of taking it's own ideas into finished products. Claude struggled to refine the game logic. I repeatedly asked it to adjust the collision detection but it kept assuming three rigid states (success, hitting the ring, or drowning) and mixed the X and Y positions when only the X coordinate mattered.

After dozens of prompts I finally downloaded the artifact code and made the fixes to the collision detection code manually. Five minutes of hands–on coding resolved the main issues. Being able to directly update the code was a huge help, especially after Claude seemed to cache old versions and insist it had used my latest changes.


![ai-diff.png]({{site.baseurl}}/assets/ai-diff.png)


Here is the final playable artifact:

<iframe src="/assets/claude-artifacts/final-version.html" width="100%" height="900" title="Final version"></iframe>

<p class="text-center"><a href="https://claude.ai/public/artifacts/444dae0c-7393-4e9a-a8e5-3ed762beb185">Open the final artifact on Claude.ai</a></p>

Overall I was impressed with how quickly Claude generated a starting point, but it still takes real development and debugging time to polish the logic to make something actually usable. If you hit a wall with the AI, don’t be afraid to dive into the code yourself.
