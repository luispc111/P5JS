// scaled and icy colorpallete
let pallete = ['#3D3A39', '#EE88AF', '#F8F3ED', '#81C1CB', '#F3DE09'];

function setup() {
  createCanvas(800, 800);
  noLoop();
}

function drawPoints(){
  strokeWeight(15);
  
  for(let i = 0; i < 1500; i++){
    // let r = random(pallete.length-1);
    stroke(random(pallete));
    point(random(40, 380), random(420, 760));
  }
}

function drawLines(){
  strokeWeight(5);
  
  x=0;
  y=0;
  lastX = random(420, 760);
  lastY = random(420, 760);
  
  for(let i = 0; i < 750; i++){
    stroke(random(pallete));
    x = random(420, 760);
    y = random(420, 760);
    line(lastX, lastY, x, y);
    lastX = x;
    lastY = y;
  }
}

function drawTriangles(){
  strokeWeight(5);
  
  for(let i = 0; i < 150; i++){
    stroke(random(pallete));
    fill(random(pallete));

    triangle(random(40, 380), random(40, 380), random(40, 380), random(40, 380), random(40, 380), random(40, 380));
  }
}

function drawRectangles(){
  strokeWeight(5);
  
  for(let i = 0; i < 150; i++){
    stroke(random(pallete));
    fill(random(pallete));
    
    do{
      x = random(420, 760);
      y = random(40, 380);
      w = random(1, 160);
      h = random(1, 160);
    } while(x+w > 760 || y+h > 380);
    
    rect(x, y, w, h);
  }
}

function draw() {
  background(220);

  drawPoints();
  drawLines();
  drawTriangles();
  drawRectangles();
}
