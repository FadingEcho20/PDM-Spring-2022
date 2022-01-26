function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(0);
  let pac = color(255, 204, 0);
  let ghostBody = color(255,0,0);
  let ghostEyeBack = color(255);
  let ghostEyeFront = color(0,0,255);

  fill(pac);
  arc(200,200,300,300,PI + QUARTER_PI,HALF_PI + QUARTER_PI);

  fill(ghostBody);
  arc(600,200,300,300,PI,TWO_PI);
  noStroke();
  rect(450,200,300,150);
  fill(ghostEyeBack);
  circle(525,200,100);
  circle(675,200,100);
  fill(ghostEyeFront);
  circle(525,200,50);
  circle(675,200,50);
}