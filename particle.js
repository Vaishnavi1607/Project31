class Particle{
    constructor(x,y,r)
    {
        var options ={
            
            restitution:0.4
           
            // density:1.2
        }
       
        this.x= x;
        this.y=y;
        this.r =r;
       
        
        
        this.body=Bodies.circle(this.x,this.y,this.r,options);
       this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);

    }
    display(){
        var parpos =this.body.position;

        push()
        translate(parpos.x,parpos.y);
        fill(this.color);
        noStroke();
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r);
        pop()

      }



}