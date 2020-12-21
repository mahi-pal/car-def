var car,wall;
var speed,weight;
var def;
function setup() {
  createCanvas(1600,400);
  car = createSprite(200, 200, 50, 50);
  speed = random(55,90)
  weight = random(400,1500);
  car.velocityX=speed;
  wall = createSprite(1200,200,50,500);
  def = .5*speed*speed*weight/22500;
}

function draw() {
  background("black");  
  if(wall.x-car.x <car.width/2+wall.width/2){
   if(def<100){
     car.shapeColor ="green" ;
   }
   if(def>100 && def<180 ){
    car.shapeColor ="yellow" ;
  }
  if(def>180){
    car.shapeColor ="red" ;
  }
  }
  drawSprites();
}