function setup() {
  createCanvas(400, 400);
  noLoop();
}

function randomFunc(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function drawOutline(){
  noStroke();
  fill(220);
  rect(0, 0, 20, 400);
  rect(380, 0, 20, 400);
  rect(0, 0, 400, 20);
  rect(0, 380, 400, 20);
}

function draw() {
  background(0);

  coords = []
  for (let i = 1; i <= 25; i++) {
    coords[i] = randomFunc(25, 375);
  }
  
  stroke(220);
  for (let i = 1; i <= 25; i+=2) {
    strokeWeight(10);
    point(coords[i], coords[i+1]);
    
    strokeWeight(1);
    ran = randomFunc(1,19);
    ran = ran % 2 == 0 ? ran+1 : ran;
    line(coords[i], coords[i+1], coords[ran], coords[ran+1]);
    
    ran = randomFunc(1,19);
    ran = ran % 2 == 0 ? ran+1 : ran;
    line(coords[i], coords[i+1], coords[ran], coords[ran+1]);
  }

  drawOutline();
}
