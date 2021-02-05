const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload(){
  poly = loadImage("polygon.png");


}



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
  
    stand = new Stand(560,250,120,20);
    block = new Block(510,225,20,30)
    block1 = new Block(530,225,20,30)
    block2 = new Block(550,225,20,30)
    block3 = new Block(570,225,20,30)
    block4 = new Block(590,225,20,30)
    block5 = new Block(610,225,20,30)
    block6 = new Block(530,195,20,30)
    block7 = new Block(550,195,20,30)
    block8 = new Block(570,195,20,30)
    block9 = new Block(590,195,20,30)
    block10 = new Block(550,165,20,30)
    block11 = new Block(570,165,20,30)
    block12 = new Block(560,135,20,30)
    polygon = Bodies.circle(50,200,20)
    World.add(world,polygon)
   slingshot = new SlingShot(this.polygon,{x:100,y:200})
}



function draw(){
    background("red");
    Engine.update(engine);
    image(poly,polygon.position.x,polygon.position.y-40,40,40)

   stand.display()
   block.display()
   block1.display()
   block2.display()
   block3.display()
   block4.display()
   block5.display()
   block6.display()
   block7.display()
   block8.display()
   block9.display()
   block10.display()
   block11.display()
   block12.display()
   slingshot.display()
   fill("green")
   text("Press space to get a second chance",300,25)
}



function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
 if(keyCode === 32){
  Matter.Body.setPosition(this.polygon, {x: 100 , y: 200});
 slingshot.attach(this.polygon)
 }
}

















