var value;
var x=0, y=0;
var r = 255,g = 255,b = 255;
var posX;
var posY;

function setup() {
  createCanvas(windowWidth,windowHeight);
  
}

function draw() {
  background(0);
  

  
  posX= width/2 +x -height/3/2;
  posY= height/2+y -height/3/2;
  
  fill(r,g,b);
  noStroke();
  rect(posX , posY, height/3, height/3);
  
}

function keyPressed (){
  
  if (keyCode === LEFT_ARROW){
      r= random (255);
      g= random (255);
      b= random (255);
      fill(r,g,b);
      x-=20;
      
      if (posX <=0){
          x = 0;
          r= (255);
          g= (255);
          b= (255);
          fill(r,g,b);
      }
  } 
  
  if (keyCode === RIGHT_ARROW){
      r= random (255);
      g= random (255);
      b= random (255);
      fill(r,g,b);
      x+=20;
      
      if (posX >= windowWidth - height/3){
          x = 0;
          r= (255);
          g= (255);
          b= (255);
          fill(r,g,b);
      }
  }
  
  if (keyCode === UP_ARROW){
      r= random (255);
      g= random (255);
      b= random (255);
      fill(r,g,b);
      y-=20;
      
      if (posY <=0){
          y = 0;
          r= (255);
          g= (255);
          b= (255);
          fill(r,g,b);
      }
  } 
  
  if (keyCode === DOWN_ARROW){
      r= random (255);
      g= random (255);
      b= random (255);
      fill(r,g,b);
      y+=20;
      
      if (posY >= windowHeight - height/3){
          y = 0;
          r= (255);
          g= (255);
          b= (255);
          fill(r,g,b);
      }
  }
}  