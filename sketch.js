var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, invground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(900, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(700,100,50,50)
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(720, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	box1 = createSprite(760, 610, 20,100);
	box1.shapeColor=color("red")

	box2 = createSprite(550,610, 20,100);
	box2.shapeColor=color("red")

	box3 = createSprite(650,650, 200,20);
	box3.shapeColor=color("red")

	invground = createSprite(400, 598, 200,20);
	invground.shapeColor = color("white")
	invground.visible = false;


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(720 , 100 , 5, {restitution:0.6, friction: 1});
	Matter.Body.setStatic(packageBody, true);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 635, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 box1 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, box1);
	 
	box2 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true, friction: 1} );
	 World.add(world, box2);
	 
	box3 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world,  box3);
	
	 invground = Bodies.rectangle(width/2, 650, width, {isStatic:true});
     World.add(world, invground);
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  keyPressed();
 
 
}

function keyPressed() {
 if (keyCode == DOWN_ARROW) {
	 console.log("down")
	Matter.Body.setStatic(packageBody, false);
	   
	
  }
}



