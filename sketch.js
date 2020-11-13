var fr, mr;
var ball1, ball2, ball3, ball4;

function setup() {

  createCanvas(800, 400);

  fr = createSprite(200, 100, 50, 50);
  fr.shapeColor = "green";

  mr = createSprite(600, 100, 50, 50);
  mr.shapeColor = "green";

  ball1 = createSprite(200, 200, 50, 50);
  ball2 = createSprite(600, 200, 50, 50);
  ball3 = createSprite(200, 300, 50, 50);
  ball3.shapeColor = "green";
  ball4 = createSprite(600, 300, 50, 50);
  ball4.shapeColor = "green";

  fr.velocityX = 2;
  mr.velocityX = -2;

  ball1.velocityX = 2;
  ball2.velocityX = -2;

}

function draw() {
  background(255,255,255);  

  ball4.x = World.mouseX;
  ball4.y = World.mouseY;

  if(touching(ball3, ball4)) {
    ball3.shapeColor = "red";
    ball4.shapeColor = "red";
  }

  else {
    ball3.shapeColor = "green";
    ball4.shapeColor = "green";
  }

  bouncing(fr, mr);
  bouncing(ball1, ball2);
  
  drawSprites();

}

