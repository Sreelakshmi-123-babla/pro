 var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 

var bg,bgImg;
var snow1;

function preload() {
  bg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(900,600);
  engine = Engine.create();
  World = engine.world;
  

  snow1 = new Snow(100,150,10,10);
}

function draw() {
  background(bg); 
  
  Engine.update(engine);
  
  snow1.display();
  drawSprites();
}