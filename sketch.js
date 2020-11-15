const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;

var ball1, ball2, ball3, ball4;

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    var ball_options = {
        restitution: 1.0
    }

    var ball1_options = {
      restitution: 1.0  
    }

    var ball2_options = {
        restitution: 1.0
    }

    var ball3_options = {
        restitution: 1.0
    }

    var ball4_options = {
        restitution: 1.0
    }

    ground = Bodies.rectangle(400,390,600,20,ground_options);
    World.add(world,ground);
    
    ball = Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);

    ball1 = Bodies.circle(250,100,20,ball1_options);
    World.add(world,ball1);

    ball2 = Bodies.circle(300,100,20,ball2_options);
    World.add(world,ball2);

    ball3 = Bodies.circle(350,100,20,ball3_options);
    World.add(world,ball3);

    ball4 = Bodies.circle(400,100,20,ball4_options);
    World.add(world,ball4);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);

    ellipse(ball1.position.x,ball1.position.y,20,20);
    ellipse(ball2.position.x,ball2.position.y,20,20);
    ellipse(ball3.position.x,ball3.position.y,20,20);
    ellipse(ball4.position.x,ball4.position.y,20,20);
}