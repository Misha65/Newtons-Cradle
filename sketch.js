
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


	roof=new Roof(330,170,300,20);
	ball=new Balls(240,450,20);
	ball2=new Balls(280,450,20);
	ball3=new Balls(320,450,20);
	ball4=new Balls(360,450,20);
	ball5=new Balls(400,450,20);
	rope1=new Rope(ball.body,roof.body,ball.Radius*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 roof.display();
 ball.display();
 ball2.display();
 ball3.display();
 ball4.display();
 ball5.display();
rope1.display();

  drawSprites();
 
}



