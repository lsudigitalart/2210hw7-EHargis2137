function setup(){
  createCanvas(640, 480);
}

function draw(){}

function mouseReleased(){
  background(0);
  charGen(mouseX, mouseY, 100);
}

function charGen(eyes, mouth, body){
  eY = height/2;
  //body
  fill(random(255), random(255), random(255));
  ellipse(width/2, eY, body, body*random(3));

  //eyes
  fill(random(255), random(255), random(255));
  rectMode(CENTER);
  rect(width/2, eY-20*random(2), map(eyes, 0, width, 10, 40), 8);
}
