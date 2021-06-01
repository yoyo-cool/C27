
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.
	ground1=new Ground(600,680,1200,20)
	stone1=new stone(100,500,100,100)
	rubber1=new rubber(300,500,30)
	hammer1=new Hammer(500,500,100,30)
	iron1=new iron(200,500,100,100)
	sand1=new sand(800,500,30)
	sand2=new sand(801,500,30)
	sand3=new sand(802,500,30)
	sand4=new sand(803,500,30)
	sand5=new sand(804,500,30)
	sand6=new sand(805,500,30)
	sand7=new sand(806,500,30)
	sand8=new sand(807,500,30)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  ground1.display()
  stone1.display()
  rubber1.display()
  hammer1.display()
  iron1.display()
  sand1.display()
  sand2.display()
  sand3.display()
  sand4.display()
  sand5.display()
  sand6.display()
  sand7.display()
  sand8.display() 
}



