function setup() {
  createCanvas(800, 800);
  noLoop();
}

function drawOutline(){
  noStroke();
  fill(220);
  blendMode(LIGHTEST);
  rect(0, 0, 40, 800);
  rect(760, 0, 40, 800);
  rect(0, 0, 800, 40);
  rect(0, 760, 800, 40);
}

function draw() {
  r=random(255);
  g=random(255);
  b=random(255);
  
  r2=random(255);
  g2=random(255);
  b2=random(255);
  
  blendMode(MULTIPLY);
  for(var i = 40; i < 720; i+=60){
    noStroke();
    fill(color(r, g, b));
    rect(i, 40, 60, 720);
    
    fill(color(r2, g2, b2));
    rect(40, i, 720, 60);
    r+=10;
    // g+=10;
    b+=10;
    
    // r2+=10;
    g2+=10;
    // b2+=10;
  }
  
  drawOutline();
}