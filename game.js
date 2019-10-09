var x=50
var y=50
xmove=2
var pic
function setup(){
    createCanvas(1000,800);
    pic=loadImage("cat.jpeg");
}

function draw(){
    background(0);
    image(pic,x,y,50,50);
   x = x+xmove
    if(keyIsDown(RIGHT_ARROW)){
        x = x+xmove
    }
    
    }










