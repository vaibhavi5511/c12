
var trex, trex_running;
var ground;
var groundImg;
var invisibleGrnd;
var cloud, cloudImg;
function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImg = loadImage("ground2.png");
  cloudImg = loadImage("cloud.png");
}

function setup() {
  createCanvas(600, 200)

  //create a trex sprite
  trex = createSprite(50, 180, 20, 50);
  trex.addAnimation("trex_run", trex_running);
  trex.scale = 0.5;

  ground = createSprite(300, 180, 600, 5);
  ground.addImage("ground", groundImg);
  ground.velocityX = -4;

  invisibleGrnd = createSprite(300, 190, 600, 5);
  invisibleGrnd.visible = false;
}

function draw() {
  background("grey")

  if (keyDown("space") && (trex.y > 150)) {
    trex.velocityY = -10;
  }
  trex.velocityY += 0.8
  trex.collide(invisibleGrnd);

  if (ground.x < 0) {
    ground.x = ground.width / 2
  }
  console.log(frameCount)
  spawnClouds();
  drawSprites();
}
function spawnClouds() {
  if ( frameCount % 60 == 0){
    cloud = createSprite(600, 100, 40, 10);
    cloud.velocityX = -3;
    cloud.y = Math.round(random(60,160));
    cloud.addImage("cloud",cloudImg);
    cloud.scale = 0.5;
    trex.depth = cloud.depth+1;
  }
  
}