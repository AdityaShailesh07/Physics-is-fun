//nameSpacing

const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground;

function setup() {
  createCanvas(400,400);
 
  //universe
  engine= Engine.create();
    //world- creating plannet earth
    world= engine.world;


//updating Matter.js Properties using Json format
var options={
  isStatic: true
  
}
var ball_options={
  restitution: 1
  
}

      //body- create living things
      ground=Bodies.rectangle(200,380,400,40, options);
      ball=Bodies.circle(200,200,30,ball_options);

      //sending parcel to the planet earth
      World.add(world,ground);
      World.add(world,ball)
}

function draw() {
  background("black"); 
  Engine.update(engine);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,40);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);

  drawSprites();
}