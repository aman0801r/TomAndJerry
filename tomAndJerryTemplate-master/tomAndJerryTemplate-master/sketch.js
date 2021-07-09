var cat
var catslee
var catwalk
var catcoll
var bgImg
var jerry
var jerrysta
var jerryteasing
var jerryHappy

function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");
catslee=loadAnimation("images/cat1.png");
catwalk=loadAnimation("images/cat2.png","images/cat3.png");
catcoll=loadAnimation("images/cat4.png","images/cat4.png");

jerrysta=loadAnimation("images/mouse4.png");
jerryteasing=loadAnimation("images/mouse2.png","images/mouse3.png");
jerryHappy=loadAnimation("images/mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(860,700,50,50);
cat.addAnimation("sleeping",catslee);
cat.scale=0.2;

jerry=createSprite(200,700,50,50);
jerry.addAnimation("standing",jerrysta);
jerry.scale=0.1;
}



function draw() {

    background(bgImg);
//Write condition here to evalute if tom and jerry collide

if (cat.x-jerry.x <(cat.width-jerry.width)/2){
    
    cat.addAnimation("collide",catcoll);
    cat.changeAnimation("collide");
    cat.velocityX=0;
    jerry.addAnimation("happy",jerryHappy);
    jerry.changeAnimation("happy");

}


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode===LEFT_ARROW){
    
    jerry.addAnimation("teasing",jerryteasing);
    jerry.frameDelay=25;
    jerry.changeAnimation("teasing",jerryteasing);

    cat.velocityX=-5;
    cat.addAnimation("walking",catwalk);
    cat.changeAnimation("walking",catwalk);
    cat.scale=0.3;
}



}
