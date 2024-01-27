let counter = 0;
const bgColor = "208,144,240";
const strokeColor = "121,30,144";
let previousState;

const colorFn = (c) => color(`rgb(${c})`);

function increment() {
  counter++;
}

function setup() {
  angleMode(DEGREES);
  createCanvas(800, 800);
  setUpClock();
  setClockNumbers();
  saveState();

  setInterval(increment, 1000); // every 1000 ms = ever 1 seconds
}

function setUpClock() {
  let rgb = colorFn(bgColor);
  background(rgb);
  rgb = colorFn(strokeColor);
  stroke(rgb);
  strokeWeight(10);
  circle(width / 2, height / 2, 600);
  strokeWeight(30);
  point(width / 2, height / 2);
}

const radFn = (deg) => (deg * PI) / 180;

const fixNumbers = (n) => (n % 12 != 0 ? n % 12 : 12);

function setClockNumbers() {
  translate(height / 2, width / 2);
  textAlign(CENTER, CENTER);

  for (let h = 0; h < 12; h++) {
    let v1 = p5.Vector.fromAngle(radFn((360 / 12) * h), 250);
    strokeWeight(0);
    textSize(30);
    text(fixNumbers(h + 3), v1.x, v1.y);

    strokeWeight(10);
  }
}

function drawManecillas(num, timeType) {
  let sWeight;
  let manecillaLength;
  let timeSections;

  switch (timeType) {
    case "seconds":
      sWeight = 3;
      manecillaLength = 220;
      timeSections = 60;
      break;
    case "minutes":
      sWeight = 6;
      manecillaLength = 190;
      timeSections = 60;
      break;
    case "hours":
      sWeight = 12;
      manecillaLength = 160;
      timeSections = 12;
      break;
  }

  let v2 = p5.Vector.fromAngle(
    radFn((360 / timeSections) * num - 90),
    manecillaLength
  );

  strokeWeight(sWeight);
  line(0, 0, v2.x, v2.y);
}

function draw() {
  undoToPreviousState();

  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  translate(height / 2, width / 2);
  drawManecillas(sec, "seconds");
  drawManecillas(min + sec / 60.0, "minutes");
  drawManecillas(hour + min / 60.0, "hours");
}

function undoToPreviousState() {
  if (!previousState) {
    return;
  }

  image(previousState, 0, 0);
}

function saveState() {
  previousState = get();
}
