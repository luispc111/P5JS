let stonePalette = ['#C5C5C5', '#AEAEAE', '#BABABA'];
let diamondOrePalette = ['#FFFFFF', '#6BF7F7', '#69EEEE', '#ABF9F9'];
let pinkPalette = ['#BA3BB4', '#CC76A1', '#F58FA9'];
let aquaPalette = ['#148F77', '#17B395', '#04755F'];
let purplePalette = ['#5D1EBD', '#3A1376', '#914AFF'];

let orePositions = [[5,13,14, 8,9, 6,7,11,12, 4,5,6,7,8,11,12, 2,3,9,10, 8,9,10,11, 5, 12,13, 9,10,11,12,13,14, 4,5,10,11], [3,3,3,4,4,6,6,6,6,7,7,7,7,7,7,7,9,9,9,9,10,10,10,10,11,12,12,13,13,13,13,13,13,14,14,14,14]];


function setup() {
  createCanvas(800, 800);
  noLoop();
}

function orePosition(x,y){
  for(var i = 0; i < orePositions[0].length; i++){
    if(x == orePositions[0][i] && y == orePositions[1][i]){
      return true;
    }
  }
  return false;
}

function drawOre(){
  for(var h = 0; h < 16; h++){
    for(var w = 0; w < 16; w++){
      if(orePosition(h+1,w+1)){
        fill(random(purplePalette));
      } else{
        fill(random(stonePalette));
      }
      
      square(h*50,w*50,50);
    }
  }
}

function draw() {
  background(220);
  noStroke();
  drawOre();
}