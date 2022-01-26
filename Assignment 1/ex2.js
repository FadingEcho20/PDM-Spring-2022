function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  let c1 = color(0,0,255);
  let c2 = color(0,255,0);
  let c3 = color(255,0,0);
  c1.setAlpha(100);
  c2.setAlpha(100);
  c3.setAlpha(100);
  fill(c3);
  noStroke();
  circle(200,150,175);
  fill(c1);
  noStroke();
  circle(150,250,175);
  fill(c2);
  noStroke();
  circle(250,250,175);
}