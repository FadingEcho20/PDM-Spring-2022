//vars to control paint app
var paintColor;
var paintSize;
//vars for music
const synth = new Tone.Synth().toDestination();
const bgMusic = ["C#5","C#5","G#4","G#4","A#4","A#4","F4","F4"];

function setup() {
  createCanvas(1920, 1080);
  paintColor = color('black');
  paintSize = 15;
}

function ui() {
  //rectangles to view colors
  let triangleHeight = 255;
  let triangletop = 500;
  strokeWeight(0);
  fill('red');
  square(0,0,50);
  fill('orange');
  square(0,50,50);
  fill('yellow');
  square(0,100,50);
  fill('green');
  square(0,150,50);
  fill('cyan');
  square(0,200,50);
  fill('blue')
  square(0,250,50);
  fill('magenta');
  square(0,300,50);
  fill('brown');
  square(0,350,50);
  fill('white');
  square(0,400,50);
  fill('black');
  square(0,450,50);
  triangle(25, triangletop, 5, triangletop + triangleHeight, 45, triangletop + triangleHeight);
}

function draw() {
  ui();
  if(mouseIsPressed)
  {
    synth.triggerAttackRelease("C4", "8n");
    print('mouse is pressed');
    if(mouseX < 50)
    {
      if(mouseY < 50)
        paintColor = color('red');
      else if(mouseY < 100)
        paintColor = color('orange');
      else if(mouseY < 150)
        paintColor = color('yellow');
      else if(mouseY < 200)
        paintColor = color('green');
      else if(mouseY < 250)
        paintColor = color('cyan');
      else if(mouseY < 300)
        paintColor = color('blue');
      else if(mouseY < 350)
        paintColor = color('magenta');
      else if(mouseY < 400)
        paintColor = color('brown');
      else if(mouseY < 450)
        paintColor = color('white');
      else if(mouseY < 500)
        paintColor = color('black');
      else if(mouseY <= 755)
        paintSize = mouseY - 500;
    }
    else
    {
      stroke(paintColor);
      strokeWeight(paintSize);
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
  }
}