//background music
let crusher = new Tone.BitCrusher(2.5).toDestination();
let synth = new Tone.Synth().connect(crusher);

//sound effect
const phaser = new Tone.Phaser({
	frequency: 1,
	octaves: 5,
	baseFrequency: 20
}).toDestination();
const phas = new Tone.AMSynth().connect(phaser);

let noteNumber; 
let lastFramePlayed;
let note = ['F4','E4','C#4','D4'];
let playEffect;

function preload() {
  img = loadImage('./1s5vtryd7gl81.jpg');
}

function setup() {
  createCanvas(400, 400);
  pitch = 500;
  noteNumber = 0;
  lastFramePlayed = 0;
  playEffect = false;
}

function draw() {
  background(220);
  image(img,0,0,400,400);

  // if(!playEffect) {
  //   if(noteNumber == 3) {
  //     if(lastFramePlayed + 15 == frameCount) {
  //       lastFramePlayed = frameCount;
  //       synth.triggerAttackRelease(note[noteNumber], .25);
  //       noteNumber = 0;
  //     }
  //   }
  //   else {
  //     if(noteNumber == 2) {
  //       if(lastFramePlayed + 7 == frameCount) {
  //         lastFramePlayed = frameCount;
  //         synth.triggerAttackRelease(note[noteNumber], .125);
  //         noteNumber++;
  //       }
  //     }
  //     else {
  //       if(lastFramePlayed + 15 == frameCount) {
  //         lastFramePlayed = frameCount;
  //         synth.triggerAttackRelease(note[noteNumber], .25);
  //         noteNumber++;
  //       }
  //     }
  //   }
  // }
}

function mousePressed() {
  Tone.start();
  // playEffect = true;
  phas.triggerAttackRelease(20, 1);
}