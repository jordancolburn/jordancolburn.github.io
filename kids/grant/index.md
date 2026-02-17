---
layout: default
title: Grant's Fun Zone
noHeader: true
noFooter: true
---

<style>
  .kid-page {
    min-height: 100vh;
    padding: 2rem;
    background: linear-gradient(135deg, #43e97b 0%, #38f9d7 50%, #4ecdc4 100%);
    margin: -30px -15px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .kid-page .back-link {
    display: inline-block;
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
    margin-bottom: 1rem;
    opacity: 0.9;
    transition: opacity 0.2s;
  }

  .kid-page .back-link:hover {
    opacity: 1;
  }

  .kid-page h1 {
    font-size: 2.8rem;
    color: #fff;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.15);
    margin-bottom: 2rem;
  }

  .games-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
    max-width: 900px;
    margin: 0 auto;
  }

  .game-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
    background: #fff;
    border-radius: 20px;
    text-decoration: none;
    color: #333;
    font-size: 1.2rem;
    font-weight: 600;
    box-shadow: 0 6px 20px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: center;
  }

  .game-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.18);
  }

  .game-card .icon {
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }

  .coming-soon {
    text-align: center;
    color: rgba(255,255,255,0.85);
    font-size: 1.3rem;
    margin-top: 2rem;
  }
</style>

<div class="kid-page">
  <a href="/kids/" class="back-link">&larr; Back</a>
  <h1>Grant's Fun Zone &#x1F680;</h1>

  <div class="games-grid">
    <a href="/kids/grant/typing-chase/" class="game-card">
      <span class="icon">&#x1F694;</span>
      Cops &amp; Robbers
    </a>
    <a href="/kids/grant/word-search/" class="game-card">
      <span class="icon">&#x1F50D;</span>
      Word Search Detective
    </a>
  </div>
</div>
