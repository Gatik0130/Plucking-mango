
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

function preload()
{
	boy=loadImage("images/boy.png");
}

function setup() {
	createCanvas(1500, 700);

	
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
    tree1=new tree(1050,580)
	mango1=new Mango(1100,100,30);
  mango2=new Mango(1170,130,30);
	mango3=new Mango(1010,140,30);
	mango4=new Mango(1000,70,30);
	mango5=new Mango(1100,70,30);
	mango6=new Mango(1000,230,30);
	mango7=new Mango(900,230,40);
	mango8=new Mango(1140,150,40);
	mango9=new Mango(1100,230,40);
	mango10=new Mango(1200,200,40);
	mango11=new Mango(1120,50,40);
	mango12=new Mango(900,160,40);
  
  stone1= new Stone(235,420,30); 
  ground1=new Ground(width/2,600,width,20);
  
  slingshot1 = new Slingshot(stone1.body,{x:235, y:420});



  
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  textSize(25);
  text("Press Space to get a second Chance to Play!!",100 ,100);
  image(boy ,200,340,200,300);
  
  
  tree1.display()
 mango1.display()
 mango2.display()
 mango3.display()
 mango4.display()
 mango5.display()
 mango6.display()
 mango7.display()
 mango8.display()
 mango9.display()
 mango10.display()
 mango11.display()
 mango12.display()
 stone1.display()
ground1.display()
slingshot1.display();


detectollision(stone1,mango1);
detectollision(stone1,mango2);
detectollision(stone1,mango3);
detectollision(stone1,mango4);
detectollision(stone1,mango5);
detectollision(stone1,mango6);
detectollision(stone1,mango7);
detectollision(stone1,mango8);
detectollision(stone1,mango9);
detectollision(stone1,mango10);
detectollision(stone1,mango11);
detectollision(stone1,mango12);


 drawSprites();
 
}


function KeyPressed() {
	if (keyCode === 32){
		Matter.Body.setPosition(stone1.body, {x:235,y:450})
		slingshot.attach(stone1.body)

	}
}

function detectollision(Lstone,Lmango){
	mangoBodyPositiion=Lmango.body.position
	stoneBodyPositiion=Lstone.body.position

	var distance =dist(stoneBodyPositiion.x,stoneBodyPositiion.y,mangoBodyPositiion.x,mangoBodyPositiion.y)
     if(distance<=Lmango.r+Lstone.r)
	 {
		 Matter.Body.setStatic(Lmango.body,false)
	 }
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
	
}


function mouseReleased(){
    slingshot1.fly();
}


