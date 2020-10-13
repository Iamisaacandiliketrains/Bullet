var bullet,wall;
var speed,weight;
var edge;
var thickness;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 30, 10);

thickness=random(22,83);
weight=random(30.52);
speed=random(223,321);

wall=createSprite(1400,200,thickness,height/2);
wall.shapecolor=(80,80,80);

speed=random(55,90);
weight=random(400,1500);


bullet.velocityX=speed;

}


function draw() {
  background("black");  

  if (wall.x-bullet.x < (bullet.width+wall.width)/2){
bullet.velocityX=0;
var deformation=0.5 * weight * speed* speed/22509;
  
if (deformation>180)
{
  bullet.shapeColor=color(255,0,0)
}

else (deformation<180 && deformation>100)
{
    bullet.shapeColor=color(230,230,0)
}

if (deformation<100)
{
bullet.shapecolor=color(0,255,0);
}

}

wall.shapeColor=(80,80,80);

bullet.shapecolor=(255,255,255);
  drawSprites();
}