const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var ground,ball;
var engine,world;


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
engine = Engine.create();
world = engine.world;

var groundOpitions = {
  isStatic: true

}

ground = Bodies.rectangle(400,390,200,20,groundOpitions);
World.add(world,ground);


}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  
  
  //drawSprites();
}

