var x = 0;
var dir = 1;
var y = 200;
var crad = 100;
var speed = 2;
var front, star, wink, gif;
var a, b, c, f;
var i = 10;
var i2 = 500;

function preload(){
  mySound = loadSound('sounds/genisiscut.wav');
  x = -crad;
  gif = loadGif('images/pixel-copy-animated-big.gif');
  front = loadImage('images/front.png');
  star = loadImage('images/star.png');
  wink = loadImage('images/wink.png');
}

function setup(){
  frameRate(10);
  createCanvas(640, 480);
  y = height/2;
  x = -crad;
  mySound.play();
}

function draw(){
  var timer = millis();
  println(timer);
  background(96, 56, 135, random(10,90));

  //GIRL NOISES

  if (timer > 12000 && timer < 50000){
    image(front, 10, 5, 200, 200);
  }
  if (timer > 12500 && timer < 50000){
    image(front, 50, 10, 200, 200);
  }
  if (timer > 12800 && timer < 50000){
    image(front, 5, 10, 200, 200);
  }
  if (timer > 13000 && timer < 50000){
    image(front, 200, 100, 200, 200);
  }
  if (timer > 13500 && timer < 50000){
    image(front, 5, 350, 200, 200);
  }
  if (timer > 13800 && timer < 50000){
    image(front, 300, 5, 200, 200);
  }
  if (timer > 14100 && timer < 50000){
    image(front, 550, 225, 200, 200);
  }
  if (timer > 14400 && timer < 50000){
    image(front, 220, 400, 200, 200);
  }
  if (timer > 14700 && timer < 50000){
    image(front, 60, 80, 200, 200);
  }
  if (timer > 15000 && timer < 50000){
    image(front, 290, 450, 200, 200);
  }
  if (timer > 15200 && timer < 50000){
    image(front, 350, 20, 200, 200);
  }
  if (timer > 15400 && timer < 50000){
    image(front, 70, 10, 200, 200);
  }
  if (timer > 15600 && timer < 50000){
    image(front, 525, 99, 200, 200);
  }
  if (timer > 15800 && timer < 50000){
    image(front, 175, 50, 200, 200);
  }
  if (timer > 16000 && timer < 50000){
    image(front, 507, 250, 200, 200);
  }
  if (timer > 16200 && timer < 50000){
    image(front, 5, 400, 200, 200);
  }
  if (timer > 16400 && timer < 50000){
    image(front, 300, 380, 200, 200);
  }
  if (timer > 16600 && timer < 50000){
    image(front, 270, 8, 200, 200);
  }
  if (timer > 16800 && timer < 50000){
    image(front, 526, 80, 200, 200);
  }
  if (timer > 17000 && timer < 50000){
    image(front, 87, 190, 200, 200);
  }
  if (timer > 17200 && timer < 50000){
    image(front, 220, 330, 200, 200);
  }
  if (timer > 17400 && timer < 50000){
    image(front, 358, 394, 200, 200);
  }
  if (timer > 17600 && timer < 50000){
    image(front, 510, 260, 200, 200);
  }
  if (timer > 17800 && timer < 50000){
    image(front, 330, 170, 200, 200);
  }
  if (timer > 18000 && timer < 50000){
    image(front, 268, 100, 200, 200);
  }
  if (timer > 18200 && timer < 50000){
    image(front, 505, 13, 200, 200);
  }
  if (timer > 18400 && timer < 50000){
    image(front, 115, 20, 200, 200);
  }
  if (timer > 18600 && timer < 50000){
    image(front, 560, 60, 200, 200);
  }

  //WINK GIRL
  if (timer > 19000 && timer <50000){
    i = i+5;
    image(wink, i, 50, 200, 200);
  }
  if (timer > 19000 && timer <50000){
    i2 = i2-5;
    image(wink, i2, 250, 200, 200);
  }

  //GIF

  if (timer > 19000 && timer < 50000){
    image(gif, 200, 150, 250, 250);
  }

  //STAR NOISES

  if (timer > 500 && timer < 800){
    image(star, 100, 100, 50, 50);
  }
  if (timer > 900 && timer < 1300){
    image(star, 50, 200, 50, 50);
  }
  if (timer > 1300 && timer < 1500){ //one loop
    image(star, 200, 100, 100, 100);
  }
  if (timer > 2000 && timer < 2300){
    image(star, 300, 50, 50, 50);
  }
  if (timer > 2300 && timer < 2700){
    image(star, 400, 100, 50, 50);
  }
  if (timer > 2700 && timer < 2900){ //another loop
    image(star, 500, 50, 100, 100);
  }
  if (timer > 3400 && timer < 3700){
    image(star, 600, 100, 50, 50);
  }
  if (timer > 3700 && timer < 4200){
    image(star, 500, 50, 50, 50);
  }
  if (timer > 4300 && timer < 4600){ //another loop
    image(star, 400, 100, 100, 100);
  }
  if (timer > 5100 && timer < 5400){
    image(star, 300, 50, 50, 50);
  }
  if (timer > 5400 && timer < 5800){
    image(star, 200, 200, 50, 50);
  }
  if (timer > 5800 && timer < 6000){ //another loop
    image(star, 100, 100, 100, 100);
  }
  if (timer > 6500 && timer < 6900){
    image(star, 200, 50, 50, 50);
  }
  if (timer > 6900 && timer < 7400){
    image(star, 300, 100, 50, 50);
  }
  if (timer > 7500 && timer < 7700){ //another loop
    image(star, 400, 50, 100, 100);
  }
  if (timer > 8000 && timer < 8400){
    image(star, 500, 100, 50, 50);
  }
  if (timer > 8400 && timer < 8900){
    image(star, 600, 50, 50, 50);
  }
  if (timer > 9000 && timer < 9200){ //another loop
    image(star, 500, 100, 100, 100);
  }
  if (timer > 9500 && timer < 10000){
    image(star, 400, 50, 50, 50);
  }
  if (timer > 10000 && timer < 10400){
    image(star, 300, 100, 50, 50);
  }
  if (timer > 10500 && timer < 10700){ //another loop
    image(star, 200, 200, 100, 100);
  }
}
