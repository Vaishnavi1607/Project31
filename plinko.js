class Plinko{
    constructor(x,y,r)
    {
        var options ={
            isStatic:true,
            restitution:0.87,
           friction:0.5,
            // density:1.2
        }
       
        this.x= x;
        this.y=y;
        this.r =r;
        
        
        
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);

    }
    display(){
        var plipos =this.body.position;

        push()
        translate(plipos.x,plipos.y)
        rectMode(CENTER);
        fill("white");
        stroke(0)
        strokeWeight(3)
        ellipse(0,0,this.r,this.r);
        pop()

      }



}