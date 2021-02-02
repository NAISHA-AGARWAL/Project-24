var paper;
var ellipse;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
Engine.run(engine);
  paper= newPaper(20,20,20);
}



function draw() {
  background(0);
  Engine.update(engine);
  paper.display();
 
 
}



