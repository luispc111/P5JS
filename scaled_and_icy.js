// scaled and icy colorpallete
pallete = ['#3D3A39', '#EE88AF', '#F8F3ED', '#81C1CB', '#F3DE09'];

function setup() {
  createCanvas(800, 800);
  noLoop();
}

function randomFunc(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function draw() {
  background(220);

  drawPoints();
  drawLines();
  drawTriangles();
  drawRectangles();
}

function drawPoints(){
  strokeWeight(15);
  
  for(let i = 0; i < 1500; i++){
    stroke(pallete[randomFunc(0, pallete.length-1)]);
    point(randomFunc(40, 380), randomFunc(420, 760));
  }
}

function drawLines(){
  strokeWeight(5);
  
  x=0;
  y=0;
  lastX = randomFunc(420, 760);
  lastY = randomFunc(420, 760);
  
  for(let i = 0; i < 750; i++){
    stroke(pallete[randomFunc(0, pallete.length-1)]);
    x = randomFunc(420, 760);
    y = randomFunc(420, 760);
    line(lastX, lastY, x, y);
    lastX = x;
    lastY = y;
  }
}

function drawTriangles(){
  strokeWeight(5);
  
  for(let i = 0; i < 150; i++){
    stroke(pallete[randomFunc(0, pallete.length-1)]);
    
    fill(pallete[randomFunc(0, pallete.length-1)]);

    triangle(randomFunc(40, 380), randomFunc(40, 380), randomFunc(40, 380), randomFunc(40, 380), randomFunc(40, 380), randomFunc(40, 380));
  }
}

function drawRectangles(){
  strokeWeight(5);
  
  for(let i = 0; i < 150; i++){
    stroke(pallete[randomFunc(0, pallete.length-1)]);
    
    fill(pallete[randomFunc(0, pallete.length-1)]);
    
    do{
      x = randomFunc(420, 760);
      y = randomFunc(40, 380);
      w = randomFunc(1, 160);
      h = randomFunc(1, 160);
    } while(x+w > 760 || y+h > 380);
    
    rect(x, y, w, h);
  }
}

