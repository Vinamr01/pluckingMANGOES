class Mango {
    constructor(x, y, radius) {
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.r = radius;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
    }
  
         display(){
             push()
              rectMode(CENTER)
               strokeWeight(0);
               fill(0,0,0);
             imageMode(CENTER);
             image(this.image, 0, 0, this.radius);
             pop()
    }
}
