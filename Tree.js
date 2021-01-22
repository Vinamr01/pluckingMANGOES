class Tree{
constructor(x , y , width , height){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2,
    }
this.body = Bodies.rectangle(x,y,width,height,options);
this.x=x;
this.y=y;
this.w = width;
this.h = height;
this.image = loadImage("tree.png");
}

display(){
 push() 
     rectMode(CENTER)
    imageMode(CENTER);
    image(this.image, 0, 0, this.w , this.h);
   pop()
}
}