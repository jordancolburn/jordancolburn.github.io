// Create the canvas
var canvas = document.createElement("canvas")
var ctx = canvas.getContext("2d")
canvas.width = 512
canvas.height = 480
document.querySelector("div.game").appendChild(canvas)

// Background image
var bgReady = false
var bgImage = new Image()
bgImage.onload = function() {
  bgReady = true
}
bgImage.src = "/assets/2019/game/Images/background.png"

// Hero image
var heroReady = false
var heroImage = new Image()
heroImage.onload = function() {
  heroReady = true
}
heroImage.src = "/assets/2019/game/Images/hero.png"

// Monster image
var monsterReady = false
var monsterImage = new Image()
monsterImage.onload = function() {
  monsterReady = true
}
monsterImage.src = "/assets/2019/game/Images/monster.png"

// Game Objects
var hero = {
  speed: 256,
  name: "Jeff"
}
var monster = {
  speed: 1,
  xDirection: 1,
  yDirection: 1
}
var monstersCaught = 0

// Handle keyboard controls
var keysDown = {}

addEventListener(
  "keydown",
  function(e) {
    keysDown[e.keyCode] = true
    console.log(keysDown)
  },
  false
)

addEventListener(
  "keyup",
  function(e) {
    delete keysDown[e.keyCode]
    console.log(keysDown)
  },
  false
)

// Reset the game when the player catches a monster
var reset = function() {
  hero.x = canvas.width / 2
  hero.y = canvas.height / 2

  // Throw the monster somewhere on the screen randomly
  monster.x = 32 + Math.random() * (canvas.width - 128)
  monster.y = 32 + Math.random() * (canvas.height - 128)
  if (areTheyTouching()) {
    reset()
  }
}

// Update game objects
var update = function(modifier) {
  if (38 in keysDown) {
    // Player holding up
    if (hero.y >= 32) {
      hero.y -= hero.speed * modifier
    }
    if (monster.y >= 32) {
      monster.y -= monster.speed * modifier
    }
  }
  if (40 in keysDown) {
    // Player holding down
    if (hero.y <= canvas.height - 64) {
      hero.y += hero.speed * modifier
    }
    if (monster.y <= canvas.height - 64) {
      monster.y += monster.speed * modifier
    }
  }
  if (37 in keysDown) {
    // Player holding left
    if (hero.x >= 32) {
      hero.x -= hero.speed * modifier
    }
    if (monster.x >= 32) {
      monster.x -= monster.speed * modifier
    }
  }
  if (39 in keysDown) {
    // Player holding right
    if (hero.x <= canvas.width - 64) {
      hero.x += hero.speed * modifier
    }
    if (monster.x <= canvas.width - 64) {
      monster.x += monster.speed * modifier
    }
  }

  if (
    monster.x <= 32 ||
    monster.x >= canvas.width - 64 ||
    (hero.y <= monster.y + 35 &&
      monster.y <= hero.y + 40 &&
      hero.x <= monster.x + 33 &&
      monster.x <= hero.x + 40)
  ) {
    monster.xDirection = monster.xDirection * -1
  }
  monster.x += monster.xDirection * monster.speed * modifier

  if (
    monster.y <= 32 ||
    monster.y >= canvas.height - 64 ||
    (hero.y <= monster.y + 35 &&
      monster.y <= hero.y + 40 &&
      hero.x <= monster.x + 33 &&
      monster.x <= hero.x + 40)
  ) {
    monster.yDirection = monster.yDirection * -1
  }
  monster.y += monster.yDirection * monster.speed * modifier
  // Are the touching?
  if (areTheyTouching()) {
    ++monstersCaught
    monster.speed = monster.speed + 10
    reset()
  }
}

var areTheyTouching = function() {
  if (
    hero.x <= monster.x + 32 &&
    monster.x <= hero.x + 32 &&
    hero.y <= monster.y + 32 &&
    monster.y <= hero.y + 32
  ) {
    return true
  } else {
    return false
  }
}

// Draw everything
var render = function() {
  if (bgReady) {
    ctx.drawImage(bgImage, 0, 0)
  }

  if (heroReady) {
    ctx.drawImage(heroImage, hero.x, hero.y)
  }

  if (monsterReady) {
    ctx.drawImage(monsterImage, monster.x, monster.y)
  }
  // Score
  ctx.fillStyle = "rgb(250, 250, 250)"
  ctx.font = "24px Helvetica"
  ctx.textAlign = "left"
  ctx.textBaseline = "top"
  ctx.fillText("Monsters caught: " + monstersCaught, 32, 32)
}

// The main game loop
var main = function() {
  var now = Date.now()
  var delta = now - then

  update(delta / 1000)
  render()

  then = now

  // Request to do this again ASAP
  requestAnimationFrame(main)
}

// Cross-browser support for requestAnimationFrame
var w = window
requestAnimationFrame =
  w.requestAnimationFrame ||
  w.webkitRequestAnimationFrame ||
  w.msRequestAnimationFrame ||
  w.mozRequestAnimationFrame

// Let's play this game!
var then = Date.now()
reset()
main()
