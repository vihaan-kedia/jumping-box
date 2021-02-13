var canvas;
var music;
var b1;
var b2;
var b3;
var b4;
var mb;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
b1 = createSprite(90,550,180,20);
b1.shapeColor="yellow"
b2 = createSprite(290,550,180,20);
b2.shapeColor="red"
b3 = createSprite(490,550,180,20);
b3.shapeColor="blue"
b4 = createSprite(690,550,180,20);
b4.shapeColor="green"


    //create box sprite and give velocity
    mb = createSprite(random(100,700),random(70,500),random(20,40),random(20,40));
    var rand = Math.round(random(1,6));
    switch(rand) {
    case 1:mb.velocityY=-4;
    break;
    case 2:mb.velocityY=-3;
    break;
    case 3:mb.velocityY=-2;
    break;
    case 4:mb.velocityY=4;
    break;
    case 5:mb.velocityY=3;
    break;
    case 6:mb.velocityY=4;
    break;
    default: break;
    }

    var randy = Math.round(random(1,6));
    switch(randy) {
    case 1:mb.velocityX=-4;
    break;
    case 2:mb.velocityX=-3;
    break;
    case 3:mb.velocityX=-2;
    break;
    case 4:mb.velocityX=4;
    break;
    case 5:mb.velocityX=3;
    break;
    case 6:mb.velocityX=4;
    break;
    default: break;
    }



    

}

function draw() {
    background(rgb(255,255,255));
    //create edgeSprite
edges=createEdgeSprites();
 
    mb.bounceOff(edges);

    if(mb.isTouching(b1)){
        mb.shapeColor="yellow"
        mb.velocityX=0;
        mb.velocityY=0;
        }
    
        
        if(mb.isTouching(b2)&&mb.bounceOff(b2)){
            mb.shapeColor="red"
            }
    
            
        if(mb.isTouching(b3)&&mb.bounceOff(b3)){
            b3.shapeColor="blue"
            mb.shapeColor="blue"
            }
    
            
        if(mb.isTouching(b4)&&mb.bounceOff(b4)){
            b4.shapeColor="green"
            mb.shapeColor="green"
            }

    //add condition to check if box touching surface and make it box
drawSprites();
}

