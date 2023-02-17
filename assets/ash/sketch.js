let blue = 150;
let canvas;
function setup(){
canvas = createCanvas(1000, 1000)
canvas.position(0, 0);
canvas.style('z-index', '-1');
}

function draw(){
  background(200);
  noStroke()
  fill(0, 24, blue);
  ellipse(width/2, height/2, 200, 200);

  if(blue < 0){
    blue = 150;
  }
  blue = blue - 1;
}