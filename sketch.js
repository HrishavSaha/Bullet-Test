//Initialising variables for sprites
var bullet;
var wall;

//Initialising variables for parameters
var weight,speed,deformation;
var thickness;

function setup() {
  createCanvas(1000, 400);

  weight = Math.round(random(30,52));
  speed = Math.round(random(223,321));

  wall = createSprite(900,200,60,200);
  wall.shapeColor = (80,80,80);
  thickness = Math.round(random(22,83));

  bullet = createSprite(20,200,10,10);
  bullet.velocityX = speed/20;

  deformation = Math.round((0.5 * weight * speed * speed)/(thickness * thickness * thickness));
}


function draw() {
  background("black");

  textSize(18);
  text("Weight: " + weight,400,20);
  text("Speed: " + speed,400,40);
  text("Thickness: " + thickness,500,20);
  text("Deformation: " + deformation,650,20);

  if(touch(bullet,wall)){

    bullet.velocityX = 0;
    
    if(deformation < 10){
      bullet.shapeColor = ("green");
      text("Wall Rating: GOOD",400,200);
    }else{
      bullet.shapeColor = ("red");
      text("Wall Rating: BAD",400,200);
    }
  }

  drawSprites();
}