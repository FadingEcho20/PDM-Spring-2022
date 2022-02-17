const bugs = ["bug1", 
              "bug2",
              "bug3",
              "bug4",
              "bug5",
              "bug6",
              "bug7",
              "bug8",
              "bug9",
              "bug10",
              "bug11",
              "bug12",
              "bug13",
              "bug14",
              "bug15",
              "bug16",
              "bug17",
              "bug18",
              "bug19",
              "bug20"];
let directions = [3,4,5,6]
let f1;
let f2;
let f3;
let f4;
let dead;
let gameTimer; 
let numberKilled;
let gameStatus; // status codes: [0 - initialize][1 - game running][2 - game over]
let CLICK_PRECISION; // number of pixels from the center of the bug to register click on bug
let RESPAWN_DELAY; // value in milliseconds for bug to respawn
let THINK_DELAY; // time before bug decides to move a different direction
let ACTION_DURATION; // time bug performs current instruction
let FADE_RATE; // rate at which bug fades after being killed 
let BUG_MIN_SPEED;
let BUG_MAX_SPEED;

function setup() {
  createCanvas(1920, 1080);
  f1 = loadImage('assets/f1.png');
  f2 = loadImage('assets/f2.png');
  f3 = loadImage('assets/f3.png');
  f4 = loadImage('assets/f4.png');
  dead = loadImage('assets/die.png');
  gameTimer = 0;
  numberKilled = 0;
  gameStatus = 0;
  RESPAWN_DELAY = 3000;
  THINK_DELAY = 500;
  CLICK_PRECISION = 50;
  ACTION_DURATION = 1500;
  FADE_RATE = 1;
  BUG_MIN_SPEED = 1;
  BUG_MAX_SPEED = 5;
  for(i = 0; i < 20; i++)
  {
    bugs[i] = new Bug(random(200,1720), random(200,880));
  }
}

function draw() {
  background(255);
  if (gameStatus == 0)
    mainMenu();
  else if(gameStatus == 1) {
    if(gameTimer < 30000) {
      if(gameTimer < 20000) {
        if(gameTimer < 10000) {
          for(i = 0; i < 5; i++)
          {
            bugs[i].gameControl();
          }
        }
        else {
          for(i = 0; i < 10; i++)
          {
            bugs[i].gameControl();
          }
        }
      }
      else {
        for(i = 0; i < 20; i++)
        {
          bugs[i].gameControl();
        }
      }
    }
    else
      gameStatus = 2;
  
    textSize(32);
    text(numberKilled, 1800, 30);
    
    gameTimer += deltaTime;
  }
  else if(gameStatus == 2)
    gameOverMenu();
}

function mainMenu() {
  textSize(300);
  text('Squesh', 100, 300);
  rect(910, 450, 600, 100, 20);
  textSize(100);
  text('Start Game', 950, 540);
}

function gameOverMenu() {
  textSize(200);
  text('Game Over', 700, 300);
  textSize(100);
  text('Score:', 700, 400);
  text(numberKilled, 1000, 400);
  rect(910, 450, 600, 100, 20);
  textSize(100);
  text('Play Again', 950, 530);
}

function mousePressed() {
  print('Mouse was pressed');
  if(gameStatus == 0) {
    if(mouseX > 910 && mouseX < 1510)
      if(mouseY > 450 && mouseY < 550)
        gameStatus = 1;
  }
  else if(gameStatus == 1) {
    for(i = 0; i < 20; i++)
    {
      if(mouseX > (bugs[i].posX - CLICK_PRECISION) && mouseX < (bugs[i].posX + CLICK_PRECISION))
        if(mouseY > (bugs[i].posY - CLICK_PRECISION) && mouseY < (bugs[i].posY + CLICK_PRECISION))
          bugs[i].kill();   
    }
  }
  else if(gameStatus == 2) {
    if(mouseX > 910 && mouseX < 1510)
      if(mouseY > 450 && mouseY < 550) {
        gameStatus = 1;

        gameTimer = 0;
        numberKilled = 0;
        RESPAWN_DELAY = 3000;
        THINK_DELAY = 500;
        CLICK_PRECISION = 50;
        ACTION_DURATION = 1500;
        FADE_RATE = 1;
        BUG_MIN_SPEED = 1;
        BUG_MAX_SPEED = 5;
        for(i = 0; i < 20; i++)
        {
          bugs[i] = new Bug(random(200,1720), random(200,880));
        }
      }
  }
}

class Bug {
  constructor(x, y) {
    this.posX = x;
    this.posY = y;
    this.bugStatus = random(directions); // Status Codes: [0 - dead][1 - think][2 - wait][3 - up][4 - left][5 - down][6 - right]
    this.spriteCurrentFrame = 0;
    this.beginCommandFrame;
    this.timeCounter = 0; 
    this.bugOpacity = 255;
    this.bugMoveSpeed = 2; 
  }

  gameControl() { //all statements must use a render, move (except 0 and 1)
    if(this.bugStatus == 0) {
      this.renderDead(this.bugStatus);
  
      if(this.timeCounter >= RESPAWN_DELAY) {
        this.bugStatus = 1;
        this.bugOpacity = 255;
      }
      this.timeCounter += deltaTime;
    }
    else if(this.bugStatus == 1) {
      this.renderLive();
      this.think();
    }
    else if(this.bugStatus == 3) {
      this.renderLive(this.bugStatus);
      this.move(this.bugStatus);
    }
    else if(this.bugStatus == 4) {
      this.renderLive(this.bugStatus);
      this.move(this.bugStatus);
    }
    else if(this.bugStatus == 5) {
      this.renderLive(this.bugStatus);
      this.move(this.bugStatus);
    }
    else if(this.bugStatus == 6) {
      this.renderLive(this.bugStatus);
      this.move(this.bugStatus);
    }
  }

  move(stat) {
    switch (stat) {
      case 3:
        if(frameCount % 6 == 0) {
          this.spriteCurrentFrame++;
        }
  
        if(this.posY >= 100) {    
          this.posY -= this.bugMoveSpeed;
        }
        else
          this.bugStatus = 1;
  
        if(this.timeCounter >= ACTION_DURATION) {
          this.bugStatus = 1;
          this.timeCounter = 0;
        }
        this.timeCounter += deltaTime;
        break;

      case 4:
        if(frameCount % 6 == 0) {
          this.spriteCurrentFrame++;
        }
  
        if(this.posX >= 100) {    
          this.posX -= this.bugMoveSpeed;
        }
        else
          this.bugStatus = 1;
  
        if(this.timeCounter >= ACTION_DURATION) {
          this.bugStatus = 1;
          this.timeCounter = 0;
        }
        this.timeCounter += deltaTime;
        break;

      case 5:
        if(frameCount % 6 == 0) {
          this.spriteCurrentFrame++;
        }
  
        if(this.posY <= 980) {    
          this.posY += this.bugMoveSpeed;
        }
        else
          this.bugStatus = 1;
  
        if(this.timeCounter >= ACTION_DURATION) {
          this.bugStatus = 1;
          this.timeCounter = 0;
        }
        this.timeCounter += deltaTime;
        break;

      case 6:
        if(frameCount % 6 == 0) {
          this.spriteCurrentFrame++;
        }
  
        if(this.posX <= 1820) {    
          this.posX += this.bugMoveSpeed;
        }
        else
          this.bugStatus = 1;
  
        if(this.timeCounter >= ACTION_DURATION) {
          this.bugStatus = 1;
          this.timeCounter = 0;
        }
        this.timeCounter += deltaTime;
        break;

      default:
        return;
    }
  }

  think() {
    if(this.timeCounter >= THINK_DELAY)
      this.bugStatus = random(directions);
    this.timeCounter += deltaTime;
    this.bugMoveSpeed = random(BUG_MIN_SPEED, BUG_MAX_SPEED);
  }

  renderLive() {
    push();
      translate(-100, -100);
      if(this.spriteCurrentFrame == 0)
        image(f1, this.posX, this.posY, 200, 200);
      else if(this.spriteCurrentFrame == 1)
        image(f2, this.posX, this.posY, 200, 200);
      else if(this.spriteCurrentFrame == 2)
        image(f3, this.posX, this.posY, 200, 200);
      else if(this.spriteCurrentFrame == 3) {
        this.spriteCurrentFrame = 0;
        image(f4, this.posX, this.posY, 200, 200);
      }
    pop();
  }

  renderDead() {

    if(this.timeCounter < RESPAWN_DELAY && this.bugOpacity > 0)
      this.bugOpacity -= FADE_RATE * 5; 
    push();
    translate(-100, -100);
    tint(255,this.bugOpacity);
    image(dead, this.posX, this.posY, 200, 200);
    pop();
  }

  kill() {
    this.beginCommandFrame = frameCount;
    this.bugStatus = 0;
    this.timeCounter = 0;
    numberKilled ++;
  }
}