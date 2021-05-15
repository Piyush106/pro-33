function preload(){
  s1=loadImage("snow1.jpg");
  s2=loadImage("snow2.jpg");
  s3=loadImage("snow3.jpg");
  s4=loadAnimation("snow4.webp","snow5.webp");
 
}



function setup() {
  createCanvas(800,400);
  snow=createSprite(200, 200, 50, 50);
snow.addAnimation("snowing",s4);
snow.changeAnimation("snowing");

}

function draw() {
  background(s2);  
  drawSprites();
}
