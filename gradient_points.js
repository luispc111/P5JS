function setup() {
  createCanvas(400, 400);
  noLoop();
}

function randomFunc(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function draw() {
  background(220);
  
  edgeLeft = 0;
  edgeRight = 400;
  quantity = 4000;
  strokeValue = 3;
  
  colors = [['#bbb472', '#7279bb'], ['#72bbb4', '#bb7279']];
  pair = 1;
  
  for(let i = 0; i < 8; i++){
    strokeWeight(strokeValue);
    for(let j = 0; j < quantity; j++){
      stroke(colors[pair][0]);
      point(randomFunc(edgeLeft, edgeLeft+50), randomFunc(0, 400));
      
      stroke(colors[pair][1]);
      point(randomFunc(edgeRight, edgeRight-50), randomFunc(0, 400));
    }
    edgeLeft += 50;
    edgeRight -= 50;
    quantity -= 300;
    strokeValue -= 0.3;
  }
  
  noStroke();
  fill(220);
  rect(0, 0, 20, 400);
  rect(380, 0, 20, 400);
  rect(0, 0, 400, 20);
  rect(0, 380, 400, 20);
}