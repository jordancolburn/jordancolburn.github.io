---
published: true
layout: post
date: "2025-07-08 08:30:00 +0500."
permalink: "/:year/:month/:day/:title/"
title: "Can I use AI to code a simple game while laying by the pool?"
---

I experimented with **Claude.ai** artifacts and it gave me an idea—could I make
an app even while just hanging out at the pool? I've experimented with AI games
before in [this teaching code post](/2016/08/29/teaching-code/) to make some
simple JavaScript games, but maybe AI was a fun way to dip my toe into those
waters even further.

After only four short prompts I already had a simple version of the diving board
game running in the browser: [https://claude.ai/public/artifacts/57078a5a-83c7-47fe-9b1d-5c69491cbc7f](https://claude.ai/public/artifacts/57078a5a-83c7-47fe-9b1d-5c69491cbc7f).
The prompts were:

* "Help me make a JavaScript game. I want a springy stick figure diving board game the stick figure can jump in a direction and force of the users choosing (2d matrix of horizontal and vertical forces). The user has to land inside a small lifering in the water. The user can front flip, back flip and spin. The user gets points for flips combos, spins and accuracy close to the bouy. If the user just missed going through the hole, but hits it, the user drowns."
* "Can you make the screen more mobile friendly and also offer buttons on the screen as well as key presses so it can work with a phone"
* "Add a drowning animation if the ring isn't hit"


Recently I experimented with **Claude.ai** artifacts to build a small diving board game. With only a few prompts I quickly had a browser based prototype. The "AI Valley" soon appeared though—after the fast start, Claude struggled to refine the game logic. I repeatedly asked it to adjust the collision detection but it kept assuming three rigid states (success, hitting the ring, or drowning) and mixed the X and Y positions when only the X coordinate mattered.

After dozens of prompts I finally downloaded the artifact and made the fixes manually. Five minutes of hands–on coding resolved the main issues. Being able to directly update the code was a huge help, especially after Claude seemed to cache old versions and insist it had used my latest changes.

Here is the final playable artifact: [https://claude.ai/public/artifacts/444dae0c-7393-4e9a-a8e5-3ed762beb185](https://claude.ai/public/artifacts/444dae0c-7393-4e9a-a8e5-3ed762beb185)

Overall I was impressed with how quickly Claude generated a starting point, but it still takes real development time to polish the logic. If you hit a wall with the AI, don’t be afraid to dive into the code yourself—sometimes that’s all it takes to push past the valley.
