class Block {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.Visiblity = 255;
  }
  display(){
    
    if(this.body.speed < 3){
      var pos =this.body.position;
    rectMode(CENTER);
    fill("pink");
    rect(pos.x, pos.y, this.width, this.height);
     }
     else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
     
      pop();
    }
    
  }




 
   
  
   
 }