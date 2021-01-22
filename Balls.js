  
class Balls {
    constructor(x, y,radius) {
      var options = {
        isStatic:"true",
          restitution:0.3,
          friction:0.5,
          density:0.2
      }
      this.body = Bodies.circle(x, y,radius,options);
      this.radius = radius;
   //   this.diameter= radius*2;
    //  this.image=loadImage("paper.png");
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("green");
      fill(255);
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };