// const { Tone } = require("tone/build/esm/core/Tone"); - auto generated when I called Tone
let synth; 

function preload() {
  synth = new Tone.AMSynth().toDestination();
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function keyPressed() {
  if(keyCode === 81)
    synth.triggerAttackRelease("C4", "8n");
  if(keyCode === 50)
    synth.triggerAttackRelease("C#4", "8n");
  if(keyCode === 87)
    synth.triggerAttackRelease("D4", "8n");
  if(keyCode === 51)
    synth.triggerAttackRelease("D#4", "8n");
  if(keyCode === 69)
    synth.triggerAttackRelease("E4", "8n");
  if(keyCode === 82)
    synth.triggerAttackRelease("F4", "8n");
  if(keyCode === 53)
    synth.triggerAttackRelease("F#4", "8n");
  if(keyCode === 84)
    synth.triggerAttackRelease("G4", "8n");
  if(keyCode === 54)
   synth.triggerAttackRelease("G#4", "8n");
  if(keyCode === 89)
    synth.triggerAttackRelease("A4", "8n");
  if(keyCode === 55)
   synth.triggerAttackRelease("A#4", "8n");
  if(keyCode === 85)
    synth.triggerAttackRelease("B4", "8n");
  if(keyCode === 73)
    synth.triggerAttackRelease("C5", "8n");
}