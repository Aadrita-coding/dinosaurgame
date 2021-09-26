var trex, trex_running, edges;
var groundImage;
var ground;
var invisibleground;
var cloud;
var cloudImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
  cloudImage = loadImage("cloud.png")
}

function setup(){
  createCanvas(600,200);
  var ran=Math.round(random(10,50));
  console.log(ran);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50;

  ground = createSprite(300,180,600,20);
  ground.addImage(groundImage);
  
  ground.velocityX = -10;
  
  invisibleground = createSprite(300,190,600,10);
  invisibleground.visible = false
}


function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space") && trex.y >= 100){
  trex.velocityY = -10;
  }

  if (ground.x<0){
  ground.x = ground.width/2;
  }

  trex.collide(invisibleground)
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(edges[3])

  spawncloud();

  drawSprites();
}
function spawncloud()
{
  if(frameCount%100===0) {
cloud=createSprite(600,100,1,10);
cloud.velocityX=-3;
cloud.addImage(cloudImage);
cloud.y=Math.round(random(10,60));
cloud.depth=trex.depth;
trex.depth+=1;
}
}