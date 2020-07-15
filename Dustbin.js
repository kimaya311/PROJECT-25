class bin{
    
    constructor(x,y,width,height){
        var options ={
            isStatic:true
        }
    this.leftwall=Bodies.rectangle(547,576,10,200,options);
    this.leftwall.width=10;
    this.leftwall.height=200;
    this.rightwall=Bodies.rectangle(753,576,10,200,options);
    this.rightwall.width=10;
    this.rightwall.height=200;
    this.bottom=Bodies.rectangle(650,669,200,10,options);
    this.bottom.width=150;
    this.bottom.height=10;
    this.image = loadImage("dustbingreen.png");
    World.add(world,this.leftwall);
    World.add(world,this.rightwall);
    World.add(world,this.bottom);
      }
    display(){
       
      fill("white");
      strokeWeight(4);
      stroke("white");
     rectMode(CENTER);
    rect(this.leftwall.position.x,this.leftwall.position.y,this.leftwall.width,this.leftwall.height);
    rect(this.rightwall.position.x,this.rightwall.position.y,this.rightwall.width,this.rightwall.height);
    rect(this.bottom.position.x,this.bottom.position.y,this.bottom.width,this.bottom.height);
  
    image(this.image,this.bottom.position.x,580,240,200);
      }
    };