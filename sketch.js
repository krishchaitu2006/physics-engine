const Engine= Matter.Engine;
const World=  Matter.World;
const Bodies= Matter.Bodies;

var engine,world,ground,ball,ball2;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  
  var ball_options={
    restitution:1
  }
  ball=Bodies.rectangle(200,200,20,20,ball_options)
  World.add(world,ball)

  var ground_options={
    isStatic:true
  }

  ground=Bodies.rectangle(200,390,400,20,ground_options)
  World.add(world,ground);


  ball2=Bodies.circle(100,100,20,ball_options);
  World.add(world,ball2);
  

  console.log(ball)
}

function draw() {
  background("red");  
  Engine.update(engine)
rectMode(CENTER); 
rect(ball.position.x,ball.position.y,20,20);

rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);

ellipseMode(RADIUS);
ellipse(ball2.position.x,ball2.position.y,20,20);


}