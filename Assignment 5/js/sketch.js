// const { Tone } = require("tone/build/esm/core/Tone"); - auto generated when I called Tone
let buttons;
let sounds;
let pitchShift;
let soundNames;

function preload() {
  sounds = new Tone.Players({
    space : 'sounds/27568__suonho__memorymoon-space-blaster-plays.wav',
    explosion : 'sounds/156031__iwiploppenisse__explosion.mp3',
    gameover : 'sounds/42349__irrlicht__game-over.wav',
    talking : 'sounds/232175__szalonegacie__talking-people-2.mp3'
  })
  soundNames = ['space','explosion','gameover','talking']
  buttons = [];
}

function setup() {
  createCanvas(400, 400);
  pitchShift = new Tone.PitchShift().toDestination();
  sounds.connect(pitchShift);

  soundNames.forEach((text,index) => {
    buttons[index] = createButton(text);
    buttons[index].position(0, index * 20);
    buttons[index].mousePressed(() => playSound(text));
  });

  slider = createSlider(-12, 12 , 0, 1);
  slider.position(0,80);
}

function draw() {
  background(220);
  textSize(12);
  text('Press a button to play a sound.', 100, 45);
  text('Pitch Control', 145, 95);
  pitchShift.pitch = slider.value();
}

function playSound(whichSound) {
  sounds.player(whichSound).start();
}