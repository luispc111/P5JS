let palletes = [['#A1CCA5', '#8FB996', '#709775', '#415D43', '#111D13'], ['#2191fb','#ba274a','#841c26','#b2ece1','#8cdedc'], ["#f5e3e0","#e8b4bc","#d282a6","#6e4555","#3a3238"],
["#343434","#2f3061","#0e34a0","#5f5980","#dfdfdf"],
["#f72585","#b5179e","#7209b7","#560bad","#480ca8","#3a0ca3","#3f37c9","#4361ee","#4895ef","#4cc9f0"],
["#053c5e","#1d3958","#353652","#4c334d","#643047","#7c2e41","#942b3b","#ab2836","#c32530","#db222a"]];
let colorSelect = 0;
var dec = 20;

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

function windowSet(x, y, size, percentage){
  var s  = size/2;
  if (random(120) < percentage){
    windowSet(x, y, size/2, percentage-dec);
    windowSet(x+s, y, size/2, percentage-dec);
    windowSet(x, y+s, size/2, percentage-dec);
    windowSet(x+s, y+s, size/2, percentage-dec);
  }
  else{
    var c = random(palletes[colorSelect]);
    fill(c);
    stroke(c);
    square(x, y, size);
  }
}

function draw() {
  background(220);
  noStroke();
  windowSet(40, 40, 720, 100);
  
  drawOutline();
}
