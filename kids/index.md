---
layout: default
title: Colburn Kids
noHeader: true
noFooter: true
---

<style>
  .kids-hub {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    margin: -30px -15px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .kids-hub h1 {
    font-size: 3rem;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    margin-bottom: 2rem;
  }

  .kids-cards {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .kid-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 220px;
    height: 260px;
    background: #fff;
    border-radius: 24px;
    text-decoration: none;
    color: #333;
    font-size: 1.8rem;
    font-weight: bold;
    box-shadow: 0 10px 40px rgba(0,0,0,0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .kid-card:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 16px 50px rgba(0,0,0,0.25);
  }

  .kid-card .icon {
    font-size: 4rem;
    margin-bottom: 0.5rem;
  }

  .kid-card.grant {
    border-bottom: 6px solid #4ecdc4;
  }

  .kid-card.reed {
    border-bottom: 6px solid #ff6b6b;
  }
</style>

<div class="kids-hub">
  <h1>Colburn Kids</h1>
  <div class="kids-cards">
    <a href="/kids/grant/" class="kid-card grant">
      <span class="icon">&#x1F680;</span>
      Grant
    </a>
    <a href="/kids/reed/" class="kid-card reed">
      <span class="icon">&#x1F3AE;</span>
      Reed
    </a>
  </div>
</div>
