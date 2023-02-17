

//put the main page code in here
// i think if we use this on the main page I'll try to put it into a sketch container
let blue = 0;
let canvas;
function setup(){
canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0, 0);
canvas.style('z-index', '-1');
}

function draw(){
  background(200);
  noStroke()
  fill(0, 24, blue);
  ellipse(width/2, height/2, 200, 200);

  if(blue > 255){
    blue = 0;
  }
  blue = blue + 1;
}