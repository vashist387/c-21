var fixedRect, movingRect;
var gameover1,gameover2,gameover3,gameover4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;


  gameover1 = createSprite(100,100,50,50);
 gameover1.shapeColor = "yellow";
 gameover2 = createSprite(200,100,50,50);
 gameover2.shapeColor = "yellow";
 gameover3 = createSprite(300,100,50,50);
 gameover3.shapeColor = "yellow";
 gameover4 = createSprite(400,100.50,50);
 gameover4.shapeColor = "yellow";


}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(gameover1,movingRect)){
gameover1.shapeColor = "red";
movingRect.shapeColor = "red";

  }

else{
  gameover1.shapeColor = "yellow";
  movingRect.shapeColor = "green";
}

  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}