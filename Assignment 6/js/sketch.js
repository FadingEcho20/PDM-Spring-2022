// const { Tone } = require("tone/build/esm/core/Tone"); - auto generated when I called Tone
let synth; 

function preload() {
  synth = new Tone.Synth().toDestination();
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

// function playSound(whichSound) {
//   sounds.player(whichSound).start();
// }

function keyPressed() {
  // if(keyCode === 70) {
  //   print('F key pressed');
  //   synth.triggerAttackRelease("C4", "8n");
  // }
  synth.triggerAttackRelease("C4", "8n");

}