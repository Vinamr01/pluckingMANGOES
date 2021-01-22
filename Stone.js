class Stone {
    constructor(x, y, radius) {
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2,
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.r = radius;
        World.add(world, this.body);
       this.image = loadImage("stone.png")
    }
  
         display(){
            var stonepos=this.body.position;
             push() 
             translate(stonepos.x, stonepos.y);
              rectMode(CENTER)
               strokeWeight(0);
               fill(0,0,0);
             ellipse(0,0,this.r, this.r); 
             imageMode(CENTER);
             image(this.image, 0, 0, this.radius);
            pop()
    }
}
