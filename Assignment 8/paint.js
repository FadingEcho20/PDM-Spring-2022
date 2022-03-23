//vars to control paint app
var paintColor;
var paintSize;
//vars for music
var autoFilter = new Tone.AutoFilter(autoFilterFrequency).toDestination().start();
var feedbackDelay = new Tone.FeedbackDelay(feedbackDelayTime, 0.50).connect(autoFilter)
var chorus = new Tone.Chorus(chorusFrequency, 2.5, .2).connect(feedbackDelay);
var lead = new Tone.Synth().connect(chorus);
const leadSheet = ["A#3","C#4","D#4","A#4","F4","F#4","G#4","F#4","C#4","C#4","F4","F#4","D#4"];
const leadHoldNoteFor = [1000,300,300,300,800,500,800,800,500,500,300,500,300,2000]
var leadTimePassed;
var leadNoteIndex; 
var leadLengthIndex;
var leadHoldIndex;
var autoFilterFrequency;
var chorusFrequency;
var feedbackDelayTime;


//color pick sound effect
var picker =  new Tone.PluckSynth().toDestination();


function setup() {
  createCanvas(1920, 1080);
  paintColor = color('black');
  paintSize = 15;
  leadTimePassed = 0;
  leadNoteIndex = 0;
  leadHoldIndex = 0;
  autoFilterFrequency = 300;
  feedbackDelayTime = 100;
  
}

function draw() {
  ui();
  leadTrack();
  effect();
  if(mouseIsPressed)
  {
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
  leadTimePassed += deltaTime;
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

function leadTrack() {
  if(leadTimePassed > leadHoldNoteFor[leadHoldIndex])
  {
    leadTimePassed = 0;

    switch(leadNoteIndex)
    {
      case 0:
        leadLengthIndex = 1;
        break;
      case 1:
        leadLengthIndex = 1;
        break;
      case 2:
        leadLengthIndex = 1;
        break;
      case 3:
        leadLengthIndex = 0;
        break;
      case 4:
        leadLengthIndex = 1;
        break;
      case 5:
        leadLengthIndex = 1;
        break;
      case 5:
        leadLengthIndex = 0;
        break;
      case 7: 
      leadLengthIndex = 1;
        break;
      case 8: 
      leadLengthIndex = 1;
        break;
      case 9:
        leadLengthIndex = 1;
        break;
      case 10:
        leadLengthIndex = 1;
        break; 
      case 11:
        leadLengthIndex = 1;
        break; 
      case 12:
        leadLengthIndex = 1;
        break;
      case 13:
        leadLengthIndex = 1;
        break;
      default:
        leadLengthIndex = 1;
        break;
          
    }
    lead.triggerAttackRelease(leadSheet[leadNoteIndex], leadHoldNoteFor[leadHoldIndex]);
    leadNoteIndex++;
    leadHoldIndex++;
    if(leadNoteIndex == 13)
    {
      leadNoteIndex= 0;
      leadHoldIndex = 0;
    }
  }

}

function effect() {
  if(mouseIsPressed)
  {
    feedbackDelayTime = map(mouseX,0,width,0,1,true);
    autoFilterFrequency = map(mouseY,0,1080,200,30000,true);
  }
}

function mouseClicked() {
  feedbackDelayTime = 200;
  if(mouseX < 50)
    {
      if(mouseY < 50)
      picker.triggerAttack("C4", "+0.5");
      else if(mouseY < 100)
      picker.triggerAttack("E4", "+0.5");
      else if(mouseY < 150)
      picker.triggerAttack("G4", "+0.5");
      else if(mouseY < 200)
      picker.triggerAttack("D4", "+0.5");
      else if(mouseY < 250)
      picker.triggerAttack("C4", "+0.5");
      else if(mouseY < 300)
      picker.triggerAttack("F4", "+0.5");
      else if(mouseY < 350)
      picker.triggerAttack("B4", "+0.5");
      else if(mouseY < 400)
      picker.triggerAttack("A4", "+0.5");
      else if(mouseY < 450)
      picker.triggerAttack("F5", "+0.5");
      else if(mouseY < 500)
      picker.triggerAttack("A5", "+0.5");
      else if(mouseY <= 755)
        paintSize = mouseY - 500;
    }
}

