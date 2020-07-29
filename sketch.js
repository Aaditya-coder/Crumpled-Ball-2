var ground;
var dustbin,paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(width/2,680,width,20);
	dustbin = new Dustbin(420,670,70,70);
	paper = new Paper(460, 670);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display(); 
  ground.display();
  dustbin.display();
  keyPressed ();




  drawSprites();
 
}
 function keyPressed () {
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(this.body,paperpos(85,-85));
	}


}
