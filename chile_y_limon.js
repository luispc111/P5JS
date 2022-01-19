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
  background('#74E857');

  stroke('#A7EE95');
  for(var i = 0; i < 50; i++){
    strokeWeight(random(1, 2.5));
    var a = random(40,760);
    line(a,40,800-a,760);
    line(40,a,760,800-a);
  }
  
  strokeWeight(8);
  stroke(220);
  line(40,40,760,760);
  line(0,400,760,400);
  line(400,0,400,760);
  line(760,40,40,760);

  for(i = 0; i < 800; i++){
    stroke(color(random(132, 255), random(0, 18), random(0, 18)));
    strokeWeight(random(5,15));
    point(random(40,760), random(40,760));
  }
  
  drawOutline();
}
