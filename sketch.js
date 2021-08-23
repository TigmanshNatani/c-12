var garden,rabbit;
var gardenImg,rabbitImg;
var apple,leaf,orangeLeaf;
var appleImg,leafImg,orangeLeafImg,redImage

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leaf
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
 spawnCloud();
  drawSprites();
}
//Function to spawn the cloud.
function spawnCloud(){
  if(frameCount%80===0);
}
function createApples(){
  apple = createSprite(random(50,350),40,10,10);
  apple.x = random(10,100)
  apple.velocityY = 3;
  apple.scale = 0.5;
  apple.addImage(apple.png);
  apple.depth = rabbit.depth;
  rabbit.depth = rabbit.depth+1;
  
  drawSprites();
}