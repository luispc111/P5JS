let palletes = [['#A1CCA5', '#8FB996', '#709775', '#415D43', '#111D13'], ['#2191fb','#ba274a','#841c26','#b2ece1','#8cdedc'], ["#f5e3e0","#e8b4bc","#d282a6","#6e4555","#3a3238"]];
let backgrounds = ['#080D08', '#0b0b0b', '#161315'];
let colorSelect = 0;

function setup() {
  createCanvas(800, 800);
  noLoop();
}

function drawOutline(){
  noStroke();
  fill(220);
  rect(0, 0, 40, 800);
  rect(760, 0, 40, 800);
  rect(0, 0, 800, 40);
  rect(0, 760, 800, 40);
}

function draw() {
  background(backgrounds[colorSelect]);
  strokeWeight(5);
  noFill();
  
  var inc = 0;
  
  for(var rad=50; rad < 600; rad+=50){
    beginShape();
    inc += 1000;
    for(var i=0; i < TWO_PI; i+=0.1){
      stroke(random(palletes[colorSelect]));
      var xoff = cos(i) + inc;
      var yoff = sin(i) + inc;
      var r = map(noise(xoff, yoff), 0, 1, rad, rad+50);
      var x = r * cos(i) + width/2;
      var y = r * sin(i) + height/2;
      vertex(x, y);
    }
    endShape(CLOSE);
  }

  drawOutline();  
}