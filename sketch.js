var fixedRect, movingRect;
var gameObject1;
var gameObject2;
var gameObject3;
var gameObject4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
gameObject1=createSprite(100,100,50,50);
gameObject2=createSprite(200,100,50,50);
gameObject3=createSprite(300,100,50,50);
gameObject4=createSprite(400,100,50,50);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (isTouching(movingRect,gameObject3)){
    movingRect.shapeColor = "blue";
    gameObject3.shapeColor = "blue";
}
else {
movingRect.shapeColor = "pink";
gameObject3.shapeColor = "pink";
  
  }
  drawSprites();
}
