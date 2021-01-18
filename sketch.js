const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var b1, b2, b3
var hit, rop;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    b1 = new box(400,50,70,70)
    b2 = new box(400,50,70,70)
    b3 = new box(400,50,70,70)
    hit = new pen(150,400,110,110)
    rop = new rope(pen.body,{x:175,y:500})

    ground = new Ground(300,380,1200,600);
}

function draw(){

background ("lavender");
Engine.update(engine);
b1.display();
b2.display();
b3.display();
ground.display();

}

function mouseDragged(){
    
        Matter.Body.setPosition(pen.body, {x: mouseX , y: mouseY});
    
}








































































