class Paper {
constructor (x,y){
    var options ={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
     
      this.x=x;
      this.y=y;
      this.r=100;
      this.body = Bodies.circle(this.x, this.y,(this.r-20)/2, options);
      World.add(world, this.body);
      this.image = loadImage("paper.png");
}
display(){
    var pos =this.body.position;
    //var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
   // rotate(angle);
   rectMode(CENTER);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();
  }
}