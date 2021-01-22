
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

	//Create the Bodies Here.
	ground = new Ground(0, 650 , 2000 , 120);
	tree = new Tree(200 , 200 , 10 , 10);
	stone = new Stone(200 , 646 , 25);

	mango1 = new Mango(200 , 200 , 25);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  ground.display();
  tree.display();
   stone.display();
   mango1.display();
  drawSprites();
 
}



