
const E = Matter.Engine;
const W = Matter.World;
const B = Matter.Bodies;
const Body = Matter.Body;
var ball,ski,aditya,ayushi
function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);
	engine = E.create();
	world = engine.world;
	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ellipseMode(CENTER)
	e = B.circle(300,200,10,{isStatic:false,restitution:0.3,friction:0,density:1.2})
	W.add(world,e)
	ski = new bird(600,795,1200,10)
	aditya = new bird(760,750,10,90)
	ayushi = new bird(890,750,10,90)
	E.run(engine);
}
function keyReleased(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(e,e.position,{x:20,y:-10})
	}
}

function draw() {
  rectMode(CENTER);
  background(0);
  ski.lucas()
  aditya.lucas()
  ayushi.lucas()
  ellipse(e.position.x,e.position.y,10)
  drawSprites();
 
}



