function setup() {
  createCanvas(400, 400);
  noLoop();
}

function randomFunc(max){
  return Math.floor(Math.random() * max)
}

function draw() {
  background(220);
  
  // by https://coolors.co/
  colors = ['#BA3BB4', '#22031F', '#CC76A1', '#DD9296', '#F2B7C6']
  // colors = ['#57467B', '#7CB4B8', '#70F8BA', '#CAFE48']
  // colors = ['#8F2D56', '#005377', '#06A77D', '#D5C67A', '#F1A208']
  
  // confetti
  noStroke();
  blendMode(MULTIPLY);
  for (let i = 0; i < 250; i++) {
    fill(colors[randomFunc(colors.length)])
    circle(randomFunc(height), randomFunc(width), 50);
  }
  
  // outline
  blendMode(LIGHTEST);
  fill(220);
  rect(0, 0, 20, 400);
  rect(380, 0, 20, 400);
  rect(0, 0, 400, 20);
  rect(0, 380, 400, 20);
}
