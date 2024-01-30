let counter = 0;

function increment() {
  counter++;
}

const offColor = "20,1,1";
const onColor = "150, 14, 14";

const strokeLight = (numbersArray, target) => {
  status = numbersArray.includes(target) ? "on" : "off";
  let lightColor = color(`rgb(${status == "on" ? onColor : offColor})`);
  stroke(lightColor);
};

const timeFormat = (h, m) => `${h}:${m}`;

function setUpClock() {
  background(13, 12, 26);
  strokeWeight(30);
}

function clockNumber(digit, number) {
  let offset = digit * 150;
  offset += digit <= 1 ? -50 : -10;

  // lineas horizontales
  strokeLight([0, 2, 3, 5, 6, 7, 8, 9], number);
  line(160 + offset, 150, 240 + offset, 150); // horizontal up

  strokeLight([2, 3, 4, 5, 6, 8, 9], number);
  line(160 + offset, 300, 240 + offset, 300); // horizontal mid

  strokeLight([0, 2, 3, 5, 6, 8], number);
  line(160 + offset, 450, 240 + offset, 450); // horizontal down

  // lineas verticales izq
  strokeLight([0, 4, 5, 6, 8, 9], number);
  line(150 + offset, 190, 150 + offset, 260); // vertical left up

  strokeLight([0, 1, 2, 3, 4, 7, 8, 9], number);
  line(250 + offset, 190, 250 + offset, 260); // vertical right up

  // lineas verticales derecha
  strokeLight([0, 2, 6, 8], number);
  line(150 + offset, 340, 150 + offset, 410); // vertical left down

  strokeLight([0, 1, 3, 4, 5, 6, 7, 8, 9], number);
  line(250 + offset, 340, 250 + offset, 410); // vertical right down
}

function setup() {
  createCanvas(800, 600);
  setUpClock();
  setInterval(increment, 1000); // every 1000 ms = ever 1 seconds
  // noLoop();
}

function blinkDots(second) {
  if (second % 2) {
    strokeLight([1], 1);
  } else {
    strokeLight([0], 1);
  }

  // two dots :
  line(395, 220, 395, 220);
  line(395, 380, 395, 380);
}

const firstDigit = (num) => (num - (num % 10)) / 10;
const secondDigit = (num) => num % 10;

function draw() {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();

  clockNumber(0, firstDigit(hour));
  clockNumber(1, secondDigit(hour));
  clockNumber(2, firstDigit(min));
  clockNumber(3, secondDigit(min));

  blinkDots(date.getSeconds());
}
