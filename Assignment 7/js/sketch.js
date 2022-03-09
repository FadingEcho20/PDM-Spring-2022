let pitch; 

let osc = new Tone.AMOscillator(pitch,'sine','sine').start()
let gain = new Tone.Gain().toDestination();
let pan = new Tone.Panner().connect(gain);
let ampEnv = new Tone.AmplitudeEnvelope({
  attack: 0.1,
  decay: 0.2,
  sustain: 1.0,
  release: 0.8
}).connect(pan);
osc.connect(ampEnv);

function preload() {
  img = loadImage('./1s5vtryd7gl81.jpg');
}

function setup() {
  createCanvas(400, 400);
  

  pitch = 440;
}

function draw() {
  background(220);
  image(img,0,0,400,400);
}

function mousePressed() {
  Tone.start();
  ampEnv.triggerAttackRelease('4n');
}