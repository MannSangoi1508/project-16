
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey=createSprite(100,340,20,50);
  monkey.addAnimation("monkeyrunning",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,1000,10);
  ground.velocityX=-4;
  ground.x = ground.width /2;
  
  invisibleGround = createSprite(200,350,400,10);
  invisibleGround.visible = false;

  obstaclesGroup = new Group();  
  bananaGroup = new Group();
  
  survivalTime=0;
  
  
}


function draw() {
  stroke("black");
  textSize(20);
  fill("black");
  
  
  background("white");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival time: "+survivalTime, 100, 50);
  banana();
  obstacle();
  if(keyDown("space")){
   monkey.velocityY = -12;
    }
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(invisibleGround);
  
  if(obstaclesGroup.isTouching(monkey)){
    obstaclesGroup.velocityY=0;
     bananaGroup.velocityY=0;
     ground.velocityY=0;
    survivalTime=survivalTime;
    obstaclesGroup.setVelocityXEach(0); bananaGroup.setVelocityXEach(0); obstaclesGroup.setLifetimeEach(-1); bananaGroup.setLifetimeEach(-1); 
  }
  drawSprites();

  
}
 
function banana(){
 if (frameCount % 80 === 0) {
    var banana = createSprite(200,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage("banana",bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -3;
    banana.lifetime = 134;
   bananaGroup.add(banana);
 }
}

function obstacle(){
 if (frameCount % 300 === 0) {
    var obstacle = createSprite(200,320,40,10);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -3;
    obstacle.lifetime = 134;
   obstaclesGroup.add(obstacle);
 }
}





