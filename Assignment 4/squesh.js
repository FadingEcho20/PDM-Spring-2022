let currentPopulation;// current number of bugs on screen
let maxPopulation;// max number of bugs on screen

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
}

class Bug {
  lookDirection;
  moveDirection;
  bugStatus;// status codes: 1 - Alive, 0 - Dead
  moveSpeed;
  spriteSheet;

  move() {}
  dead() {}
  spawn() {}
  think() {}

}