var music;
var place1 , place2 , place3 , place4 ;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1000,600);

//create 4 different places
    place1 = createSprite(110, 580, 220, 20);
    place1.shapeColor = "blue";

    place2 = createSprite(365, 580, 220, 20);
    place2.shapeColor = "yellow";    

    place3 = createSprite(625, 580, 220, 20);
    place3.shapeColor = "red";    

    place4 = createSprite(885, 580, 220, 20);
    place4.shapeColor = "green";    

 //create box sprite and give velocity
    ball = createSprite(random(20,750),100,30,30);
    ball.shapeColor = "white";
    ball.velocityY = 7;
    }

function draw() {
    background("black");

    if (place1.isTouching(ball)) {
        ball.shapeColor = "blue";
        ball.velocityY = 0;
    }
    
    if (place2.isTouching(ball)) {
        ball.shapeColor = "yellow";
        ball.velocityY = 0;
    }

     if (place3.isTouching(ball)) {
        ball.shapeColor = "red";
        ball.velocityY = 0;
    }
    
    if (place4.isTouching(ball)) {
        ball.shapeColor = "green";
        ball.velocityY = 0;
    }

    

drawSprites();
}

