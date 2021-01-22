const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World  = Matter.World;

var engine, world;
var maxDrops = 100;
var umbrella;
var drops = [];
var thunderFrame = 0;
var thunder,thunder1,thunder2,thunder3,thunder4;

function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");
}

function setup(){
   createCanvas(400,570);
    
   engine = Engine.create();
   world = engine.world;

 
   if(frameCount% 150 === 0){
       for(var i=0; i<maxDrops; i++){
        drops.push(new drop(random(0,400),random(0,400),8,8));
       }

   }

   umbrella = new Umbrella(200,360);

}

function draw(){
    background("black");



    for(var i=0; i<maxDrops;i++){
        drops[i].display();
        drops[i].update();
      }


      var rand = Math.round(random(1,4));
      if(frameCount % 100 === 0 ){
          thunder = createSprite(random(10,370),random(10,370),10,10);
          switch(rand){
              case 1: thunder.addImage(thunder1);
              break;
              case 2: thunder.addImage(thunder2);
              break;
              case 3: thunder.addImage(thunder3);
              break;
              case 4: thunder.addImage(thunder4);
              break;
              default:break;
          }
          thunder.scale = random(0.3,0.6);
          
        }
      

     
     
      umbrella.display();

    drawSprites();
}   

