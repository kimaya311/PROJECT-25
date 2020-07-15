

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var crump,ground;
var dustbin;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,800,20);
	crump = new Paper(100,250,70);
	dustbin = new bin();
	console.log(ground);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  crump.display();
  dustbin.display();
  
  drawSprites();
}
function keyPressed() {
if(keyCode === UP_ARROW){

	Matter.Body.applyForce(crump.body,crump.body.position,{x:85,y:-95});
}



}


