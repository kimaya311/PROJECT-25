class Paper{
    constructor(x, y,width,height) {
           var options = {
        isStatic: false,
          'restitution':0.1,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y ,40,40,options);
      this.width=40;
      this.height=40;
     this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y, this.width,this.height);
      
    }
  };