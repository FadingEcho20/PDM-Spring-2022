function setup() {
  createCanvas(400, 400);
}

function draw() {
background(0,0,125);
strokeWeight(4);
stroke(255);
let circleColor = color(0,125,75);
let starColor = color(255,0,0);

fill(circleColor);
circle(200,200,250);

fill(starColor);
beginShape();
vertex(200,60);//top point
vertex(175,150);
vertex(75,150);//top left point
vertex(160,200);
vertex(100,300);//bottom left point
vertex(200,240);
vertex(300,300);//bottom right point
vertex(240,200);
vertex(325,150);//top right point
vertex(225,150)
vertex(200,60);//rejoin with first vector
endShape();
}