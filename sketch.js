function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  loadImagge();
  createSprite(400, 200, 50, 50);
  createSprite(400, 200, 50, 50);
  createSprite(400, 200, 50, 50);
  createSprite(400, 200, 50, 50);
  createSprite(400, 200, 50, 50);
  createSprite(400, 200, 50, 50);
  createSprite(400, 200, 50, 50);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  


  drawSprites();
} 
//step1 create 8 sprites
//step2 LOadImage ...load all the images
//step3 animate them using addImage command
//setp4 var neptune = createSprite(360,357,10,10); neptune.addImage(neptunei); neptune.scale=0.1;ssss