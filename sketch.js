
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj,groundObject	
var world;
var paper;
var bgImg;

function preload (){
	bgImg=loadImage("background.jpg")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paper=new Paper (200,100,70)
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new Dustbin1 (1200,500);
   
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });

	Render.run(render)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);
 
  Engine.update(engine);

  groundObject.display();
  dustbinObj.display();
  paper.display();

}

function keyPressed(){

	if( keyCode===UP_ARROW){
   Matter.Body.applyForce(paper.body, paper.body.position,{x:130,y:-140})
	}
   
}