var zombie1,zombie2,zombie3;
var player, gun;
var lasers=[];
var zombies=[];
function preload(){
  playerImage = loadImage("Zombie/player.png");
}
function setup() {
 createCanvas(windowWidth,windowHeight);
 player = createSprite(width/2, height/2, 50, 50);
 player.scale=0.4
 player.addImage("player",playerImage);
 gun = new Gun(player.x,player.y);
 for (var i=0;i<10;i++){
   zombies.push(new Zombie());
}


 //zombie1 = new Zombie1(810, 350)
 
}

function draw() {
  background(27, 0, 0);
  gun.display(player.x,player.y);
  if(keyDown(UP_ARROW)){
    player.y=player.y-10;
  }
  if(keyDown(DOWN_ARROW)){
    player.y = player.y+10;
  }
  if(keyDown(RIGHT_ARROW)){
    player.x = player.x+10;
  }
  if(keyDown(LEFT_ARROW)){
    player.x = player.x-10;
  }

 //console.log(lasers);
  for(var i=0;i<lasers.length; i++){
lasers[i].display();
lasers[i].update();
  }
  for(var i=0;i<zombies.length; i++){
    zombies[i].display();
    zombies[i].update();
      }

  
//zombie1.display();
  drawSprites();
}
function keyPressed(){
  if(keyCode === 32){
    console.log("HI");
lasers.push(new Laser(gun.pos,gun.heading))
  }
}