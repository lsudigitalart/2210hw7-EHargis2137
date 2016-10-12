var x = 0;
var dir = 1;
var y = 200;
var crad = 100;
var speed = 2;
var mySound;

function preload(){
  mySound = loadSound('sounds/vanessa.mp3');
  x = -crad;
}

function setup(){
  frameRate(10);
  createCanvas(640, 480);
  y = height/2;
  x = -crad;
  background(96, 56, 135);
  //mySound.setVolume(0.1);
  mySound.play();
  mySound.loop();
}

function draw(){
  // var timer = millis();
  // print(timer);
  ellipse(x, y, crad);
  x = speed * dir;
  if(x-crad > width){
    dir = dir * -1;
  }
}

//look into timers to trigger events
