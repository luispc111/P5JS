function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background(220);
  var moves = [];
  moves[0] = [400];
  moves[1] = [0];
  
  while(moves[1][moves[1].length-1] < 800){
    moves[1].push(moves[1][moves[1].length-1] + random(20, 40));
    moves[0].push(moves[0][moves[0].length-1] + random(-50,50));
  }
  
  strokeWeight(1);
  let cant = 250;
  for(var i=0; i<moves[0].length-1; i++){
    let x1 = moves[0][i];
    let x2 = moves[0][i+1];
    for(var j = 0; j < cant; j++){
      line(x1/cant*j, moves[1][i], x2/cant*j, moves[1][i+1]);
      line(x1+(800-x1)/cant*j, moves[1][i], x2+(800-x2)/cant*j, moves[1][i+1]);
    }
  }
}