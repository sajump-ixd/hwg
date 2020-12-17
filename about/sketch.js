function setup() {
  let c = createCanvas(windowWidth, windowHeight);
  c.position(0, 0);
}


function draw() {
  noFill();
  stroke(100, 10);  
  frameRate(200);
  var t = frameCount;
  translate(windowWidth / 2, (windowHeight) / 2);
  rotate(t / PI);
  ellipse(550, 100, sin(t / PI ) * 1360, cos(t / PI ) * 634);
};
  

