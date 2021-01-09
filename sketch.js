const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles;
var plinkos = [];
var divisions=[]
var divisionHeight=300;
var score =0;
var turn=0;
var gameState="PLAY";
var PLAY=1;
var END=0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("SCORE:"+ score,20,50)
  text("500",180,650)
  text("500",100,650)
  text("500",20,650)
  text("500",260,650)
  text("200",340,650)
  text("200",420,650)
  text("200",500,650)
  text("100",580,650)
  text("100",660,650)
  text("100",740,650)
 //text("Score : "+score,20,30);
  Engine.update(engine);

 
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(particles!=null){
    particles.display();
    if(particles.body.position.x>301 && particles.body.position.x<540 && particles.body.position.y>760){
        score = score + 200;
        particles = null;
        if(turn>=5){
          gameState = "END"
      }
    }
  }

  if(particles!=null){
    particles.display();
    if(particles.body.position.x<300 && particles.body.position.x>6 && particles.body.position.y>760){
        score = score + 500;
        particles = null;
        if(turn>=5) gameState = "END"
    }
  }
  if(gameState==="END"){
    textSize(40)
    fill("yellow")
    text("GAME OVER",300,480)
  }

  if(particles!=null){
    particles.display();
    if(particles.body.position.x>541 && particles.body.position.x<780 && particles.body.position.y>760){
        score = score + 100;
        particles = null;
        if(turn>=5) gameState = "End";
      }
  }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function mousePressed(){
 if(gameState==="PLAY"){
   turn++
   particles=new Particle(mouseX,10,10,10)
 }
}
