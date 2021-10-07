
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const constraint=Matter.Constraint;
const Body = Matter.Body;

let engiene;
let world;
 var ground;
 var rope;
 var ball, bob;
var building_options;
var crane,craneimg;
var building,buildingimg,building2,buildingimg2;

function preload(){
  craneimg=loadImage("crane.png");
  buildingimg2=loadImage("building2.png");
  buildingimg2=loadImage("building2.png");

}
function setup(){
  createCanvas(400,400);
  frameRate(80);
  
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(200,680,600,20);
  rope=new Rope(7,{x:245,y:30});

  crane= createSprite(250,50,20,20);
   crane.addImage (craneimg);
   crane.scale=0.02

   building= createSprite(250,50,20,20);
   building.addImage (buildingimg);
   building.scale=0.02

   building2= createSprite(250,50,20,20);
   building2.addImage (buildingimg2);
   building2.scale=0.02
   
 

   bob=Bodies.circle(300,300,20);
Matter.Composite.add(rope.body,bob)
fruit_con=new Link(rope,bob);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  
}


function draw() {

  background(51);
  Engine.update(engine);
  
  ground.show();
   rope.show();

   push ();
   image(groundimg,width/2,height/2,490,690);
   image(ball,bob.position.x,bob.position.y,70,70);
   pop ();

  drawSprites();
}
function drop()
{
  rope.break();
  bob.detach();
  bob = null; 
  
}
function collide(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
              World.remove(engine.world,bob);
               bob= null;
               return true; 
            }
            else{
              return false;
            }
         }
}