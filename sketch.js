var bg,girl,berry,apple,gh1,gh2,gh3,key,bush1,bush2;
var girlImg,berryImg,appleImg,gh1Img,gh2Img,gh3Img,keyImg;
var bush1Img,bush2Img,bgImg,bushes,foods,ghosts,startimg,startpg
var gameState = 1
var button1,button2

function preload(){
 bgImg = loadImage("assets/garden.png");
 girlImg = loadImage("assets/a girl.png");
 berryImg = loadImage("assets/berry.png");
 appleImg = loadImage("assets/food1.png");
 gh1Img = loadImage("assets/ghost1.png");
 gh2Img = loadImage("assets/ghost2.png");
 gh3Img = loadImage("assets/ghost3.png");
 keyImg = loadImage("assets/Dream key.jpeg");
 bush1Img = loadImage("assets/bush 1.png");
 bush2Img = loadImage("assets/bush 2.png");
 startimg = loadImage("assets/startingPage.png");
}



function setup() {
  createCanvas(windowWidth,windowHeight);
  
  bg = createSprite(width/2,height/2,10,10);
  bg.addImage(bgImg);
  bg.scale = 2.9;
  bg.velocityY = 3;

  girl = createSprite(width/2,height-30,10,10);
  girl.addImage(girlImg);
  girl.scale = 0.45;

 bushes = createGroup();
 foods = createGroup();
 ghosts = createGroup();

  
}

function draw() {
  background("black");

  if (gameState == 1) {
    introPg();
  }
  else if (gamestate == 2) {
    if (bg.y>900) {
      bg.y = height/2 ;
    }
  
    spawnBushes();
    spawnFood();
    spawnGhosts();
  
    if (keyDown("a")||keyDown("left")) {
      girl.x = girl.x-3;
    }
    if (keyDown("d")||keyDown("right")) {
      girl.x = girl.x+3;
    }
  
    
    
    
    
  
    drawSprites();
  
    
  }
  
  
}



function spawnBushes() {
  if (frameCount % 80 === 0) {
   bush1 = createSprite(random(150,width-150),0);

   var ran = Math.round(random(1,3));
    if (ran==1) {
      bush1.addImage(bush1Img);
      bush1.scale = 0.45;
    } else {
      bush1.addImage(bush2Img);
      bush1.scale = 0.45; 
    }
    bush1.velocityY = 3;
    bush1.lifetime = 1000;

    bushes.add(bush1);

  }
}

function spawnFood() {
  if (frameCount % 80 === 0) {
   apple = createSprite(random(150,width-100),0);

   var ran = Math.round(random(1,3));
    if (ran==1) {
      apple.addImage(appleImg);
      apple.scale = 0.1;
    } else {
      apple.addImage(berryImg);
      apple.scale = 0.1; 
    }
    apple.velocityY = 3;
    apple.lifetime = 1000;

    foods.add(apple);

  }
}


function spawnGhosts() {
    if (frameCount % 150 === 0) {
   
   var ran = Math.round(random(1,3));
    if (ran==1) {
       gh1 = createSprite(150,random(0,height - 150));
        gh1.addImage(gh1Img);
        gh1.scale = 0.45;
        gh1.velocityX = 3;
        gh1.velocityY = 3;
    } else {
        gh1 = createSprite(width-150,random(0,height - 150));
        gh1.addImage(gh2Img);
        gh1.scale = 0.2;
        gh1.velocityX = -3;
        gh1.velocityY = 3;
    }
    
    gh1.lifetime = 1000;

    ghosts.add(gh1);

  }
}

function introPg() {
  background(startimg);
  textSize(30);
  fill("white");
  text("THE NIGHTMARE",width/2 - 100,50);

  textSize(20);
  text("Welcome to my GAME.",width/2-100,200);
  text("CHOOSE YOUR GAMEMODE.",width/2-125,250);
  
}