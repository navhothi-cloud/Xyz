
var dustbin,ground,paperObject,leftwall,rightwall; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    var options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;
	dustbin= Bodies.rectangle(650, 700, 200,30 );
	leftwall = Bodies.rectangle(540,650,30, 150);
	rightwall = Bodies.rectangle(760,650, 30, 150 );
	paperObject= Bodies.circle(200 , 650 , 30, options);
	World.add(world, dustbin);
	World.add(world, leftwall);
	World.add(world, rightwall);
	World.add(world, paperObject);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  fill("white")

  ellipse(paperObject.position.x,paperObject.position.y,30,30)
  fill("white")
  rect(dustbin.position.x,dustbin.position.y,200,30)
  fill("white")
    rect(leftwall.position.x,leftwall.position.y,30,150)
  fill("white")

  rect(rightwall.position.x,rightwall.position.y,30,150)
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}

