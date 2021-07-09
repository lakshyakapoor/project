var wall1 , wall2, wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,target,player; 
var death=0;
var enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8, enemy9, enemy10;
var edges

function setup(){
wall1 = createSprite(155,272,300,2);
wall1.shapeColor= "red";

wall2 = createSprite(200,390,400,2);
wall2.shapeColor="red";

wall3 =  createSprite(4,196,2,400);
wall3.shapeColor="white";

wall4 = createSprite(299,170,2,200);
wall4.shapeColor="white";

wall5 = createSprite(185,73,230,2);
wall5.shapeColor="yellow"

wall6 = createSprite(395,190,2,400);
wall6.shapeColor="skyblue";

wall7 = createSprite(190,2,400,2);
wall7.shapeColor="purple"

wall8 = createSprite(72,137,2,130);
wall8.shapeColor="darkgreen"

wall9 = createSprite(150,200,150,2);
wall9.shapeColor="red";

wall10 = createSprite(222,170,2,60);
wall10.shapeColor="orange";

target = createSprite(131,129,10,100);
target.shapeColor="yellow"

player = createSprite(40,326,20,20);
player.shapeColor="green"





enemy1 = createSprite(112,282,10,10);
enemy1.shapeColor="red";
enemy1.velocityY=6;

enemy2 = createSprite(166,369,10,10);
enemy2.shapeColor="red";
enemy2.velocityY=-6;

enemy3 = createSprite(228,282,10,10);
enemy3.shapeColor="red"
enemy3.velocityY=6;

enemy4 = createSprite(289,369,10,10);
enemy4.shapeColor="red";
enemy4.velocityY=-6;

enemy5 = createSprite(313,120,10,10);
enemy5.shapeColor="red"
enemy5.velocityX=5;

enemy6 = createSprite(384,195,10,10);
enemy6.shapeColor="red";
enemy6.velocityX=-5;

enemy7= createSprite(246,8,10,10);
enemy7.shapeColor="red";
enemy7.velocityY=-3;

enemy8 = createSprite(120,60,10,10);
enemy8.shapeColor="red"
enemy8.velocityX=-6;


enemy9 = createSprite(14,134,10,10);
enemy9.shapeColor="red"
enemy9.velocityX=-2;

enemy10 = createSprite(155,227,10,10);
enemy10.shapeColor="red";
enemy10.velocityX=-8;
//enemy10.setAnimation("snail_1");
//enemy10.scale=1.0;


}


function draw() {
  background("white");


  createEdgeSprites();
  player.bounceOff(wall1);
  player.bounceOff(wall2);
  player.bounceOff(wall3);
  player.bounceOff(wall4);
  player.bounceOff(wall5);
  player.bounceOff(wall6);
  player.bounceOff(wall7);
  player.bounceOff(wall8);
  player.bounceOff(wall9);
  player.bounceOff(wall10);
  player.bounceOff(target);

  enemy1.bounceOff(wall1);
  enemy1.bounceOff(wall2);
  enemy2.bounceOff(wall1);
  enemy2.bounceOff(wall2);
  enemy3.bounceOff(wall1);
  enemy3.bounceOff(wall2);
  enemy4.bounceOff(wall1);
  enemy4.bounceOff(wall2);
  enemy5.bounceOff(wall4);
  enemy5.bounceOff(wall6);
  enemy6.bounceOff(wall4);
  enemy6.bounceOff(wall6);
  enemy7.bounceOff(wall7);
  enemy7.bounceOff(wall5);
  enemy8.bounceOff(wall7);
  enemy8.bounceOff(wall5);
  enemy9.bounceOff(wall3);
  enemy9.bounceOff(wall8);
  enemy10.bounceOff(wall3);
  enemy10.bounceOff(wall4);


  if (keyDown("left")) {
    player.x=player.x-3;
    
  }  


  if (keyDown("right")){
    player.x=player.x+3;
  }


  if (keyDown("UP_ARROW")) {
    player.y=player.y-3;
    
  }

  if (keyDown("DOWN_ARROW")) {
    player.y=player.y+3;
    
  }



  if (player.isTouching(target)){
    textSize(45);
    text("you won",200,200);
  }
  stroke("blue");
  textSize(15);
  text("DEATH:"+death,217,100);


  if (player.isTouching(enemy1)|| player.isTouching(enemy2)||player.isTouching(enemy3)||player.isTouching(enemy4)||player.isTouching(enemy5)||player.isTouching(enemy5)||player.isTouching(enemy6)||player.isTouching(enemy7)||player.isTouching(enemy8)||player.isTouching(enemy9)||player.isTouching(enemy10)){
    player.x=40;
    player.y=326;
    death=death+1;
  }


  stroke("white");
  textFont("ITALIC");
  textSize(20);
  text("TARGET",129,196);




drawSprites();
    }
