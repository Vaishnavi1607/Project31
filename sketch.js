
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 250;

function setup() {
  createCanvas(485,750);

	engine = Engine.create();
    world = engine.world;




    for(var k= 0;k <=width ; k = k+80)
    {
      divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
    }

    for(var j = 40;j <=width; j=j+50){
      plinkos.push(new Plinko(j,75,20))
    }
     
    for(var j = 25;j <=width-10; j=j+50){
      plinkos.push(new Plinko(j,175,20))
    }

    for(var j = 40;j <=width; j=j+50){
      plinkos.push(new Plinko(j,275,20))
    }

    for(var j = 25;j <=width-10; j=j+50){
      plinkos.push(new Plinko(j,375,20))
    }

   
  ground = new Ground(300,750,600,20)

  Engine.run(engine)
}

function draw() {
  background(0);
 
  drawSprites();
  
  for(var k =0; k < divisions.length; k++){
    divisions[k].display();
  }
  for(var j =0;j < plinkos.length; j++){
    plinkos[j].display();
  }

  if(frameCount%40===0){
    particles.push(new Particle(random(width/2-20,width/2+20),10,10));
  }
  
  
for(var j =0; j < particles.length;j++){
  particles[j].display();
}
ground.display();

}


