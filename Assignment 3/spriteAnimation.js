let spelunkyGuy;
let green;
let lime;
function preload() {
}

function setup() {
  createCanvas(1920, 1080);
  imageMode(CENTER);
  spelunkyGuy = new Character(loadImage('assets/SpelunkyGuy.png'), 80, 80);
  green = new Character(loadImage('assets/Green.png'), 700, 160);
  lime = new Character(loadImage('assets/Lime.png'), 1000, 240);
}

function keyPressed() {
  if(keyCode == RIGHT_ARROW) {
    spelunkyGuy.go(1);
    green.go(1);
    lime.go(1);
  }
  else if(keyCode == LEFT_ARROW) {
    spelunkyGuy.go(-1);
    green.go(-1);
    lime.go(-1);
  }
  else if(keyCode == UP_ARROW) {
    spelunkyGuy.go(3);
    green.go(3);
    lime.go(3);
  }
  else if(keyCode == DOWN_ARROW) {
    spelunkyGuy.go(4);
    green.go(4);
    lime.go(4);
  }
}

function keyReleased() {
  spelunkyGuy.stop();
  green.stop();
  lime.stop();
}

function draw() {
  background(255);
  spelunkyGuy.draw();
  green.draw();
  lime.draw();
}

class Character {
  constructor(spriteSheet, charPosX, charPosY) {
    this.spriteSheet = spriteSheet;
    this.charPosX = charPosX;
    this.charPosY = charPosY;
    this.charFacing = 1;
    this.move = 0;
    this.sx = 0;
  }

  draw() {
    push();
    translate(this.charPosX, this.charPosY);
    if(this.charFacing == 3 || this.charFacing == 4) {
      scale(1, 1);
    }
    else {
      scale(this.charFacing, 1);
    }
    
    if(this.move == -1 || this.move == 1) {
      image(this.spriteSheet, 0, 0, 80, 80, 80 * (this.sx + 1), 0, 80, 80);
      if (frameCount % 5 == 0) {
        this.sx = (this.sx + 1) % 8;
      }
      this.charPosX += 2 * this.move;
    }
    else if(this.move == 3)
    {
      image(this.spriteSheet, 0, 0, 80, 80, 80 * (this.sx + 1), 400, 80, 80);
      if (frameCount % 8 == 0) {
        this.sx = (this.sx + 1) % 5;
      }
      this.charPosY -= 1 * this.move;
    }
    else if(this.move == 4)
    {      
      image(this.spriteSheet, 0, 0, 80, 80,(80 * (this.sx + 1)) + 480, 400, 80, 80);
      if (frameCount % 8 == 0) {
        this.sx = (this.sx + 1) % 5;
      }
      this.charPosY += 1 * this.move;
    }
    else {
      image(this.spriteSheet, 0, 0, 80, 80, 0, 0, 80, 80);
      if (frameCount % 5 == 0) {
        this.sx = (this.sx + 1) % 8;
      }
      this.charPosX += 2 * this.move;
    }
    pop();
  }
  
  go(direction) {
    this.charFacing = direction;
    this.move = direction;
    this.sx = 3;
  }
  
  stop() {
    this.move = 0;
  }
}