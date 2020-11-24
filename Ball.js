class Ball {
    constructor(x, y) {
      var options = {
        'density':1,
        'frictionAir': 0.005
        
      };
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    };
    display(){
      var angle = this.body.angle;
  
      push();
      rotate(angle);
      translate(this.body.position.x,this.body.position.y)
      strokeWeight(3);
      stroke('blue')
      fill('red')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  