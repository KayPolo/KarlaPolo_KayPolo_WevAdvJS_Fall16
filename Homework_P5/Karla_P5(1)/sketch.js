var x,y;
var r,g,b;
var circleX, circleY;
var button = false;
var hat;
var a = 0, b = 0, c = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);

  circleX = width/2+300/2+10;
  circleY = height/2;
  
}

function draw(){
  //Draw the hat
    background (255);
 
  //Top of hat
      
    if (mouseX < circleX && mouseY < circleY) {
      r=  random (255);
      g=  random (255);
      b=  random (255);
      
      background(r,g,b);
      
    } else {
      background(255);
    }
    
    fill (a,b,c);
    noStroke();
    ellipse(width/2, height/2-50, 230, 230);
      
 
  //Hair
        fill (0,0,0);
        noStroke();
            ellipse(width/2 - 122, height/2 +5, 30, 45);
            ellipse(width/2 + 122, height/2 +5, 30, 45);
  
  //Ears
        
        fill (255);
        strokeWeight(5);
        stroke(0);
            ellipse(width/2 -118, height/2+30, 20, 20);
            ellipse(width/2 +118, height/2+30, 20, 20);
      
  
  
  //Face
    
      strokeWeight(7);
      ellipse(width/2, height/2+30, 230, 230);
    
    
  //Base of hat    
    
        fill (a,b,c);
        noStroke();
        rect(width/2 - 150, height/2 -50, 300, 40, 10);
        rect(width/2 -99, height/2- 110, 198, 80);
             
     
//Blank space
     
        fill (255);
        noStroke();
        rect(width/2- 115, height/2-60, 230, 10);
     
     
  //Eyes
      
        fill (0,0,0);
        noStroke();
            ellipse(width/2-50, height/2+40, 20, 20);
            ellipse(width/2+50, height/2+40, 20, 20);
      
      
  //Eyebrows
     
        fill (0,0,0);
        noStroke();
             rect( width/2- 67, height/2+10, 25, 10, 5);
             rect(  width/2+42, height/2+10, 25, 10, 5);
      
      
      
  //Moustache  
    
        fill (0,0,0);
        noStroke();
             rect(width/2- 15, height/2+ 60, 32, 30, 5);
     
}

function mouseReleased() {
      a=  random (255);
      b=  random (255);
      c=  random (255);
      fill (a,b,c);

}


