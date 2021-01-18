const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;
var ground;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic:true
  }
  ground = Bodies.rectangle(400,750,800,20,options)
  World.add(world,ground);

  var optionsb = {
    restitution: 0.5
  }
  ball = Bodies.circle(400,400,15,optionsb)
  World.add(world,ball)
}

function draw() {
  background(0); 
  Engine.update(engine) ;
  console.log(ground)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  ellipse(ball.position.x,ball.position.y,15,15)
 
}