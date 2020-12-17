let sliderS; // size
let sliderR; // rotation
let sliderX; // x value
let sliderY; // y value
let buttonReset; // restart
let buttonSave; // save
let buttonPause; // pause
let p = 0; // pause switcher
let i = 0; // invert switcher
let g; // gray value

  
let w = 80; // resize variable
function setup() { 
  
  if (windowWidth >= 1280 ) {
    w = 80
  } else if (windowWidth >= 769 && windowWidth < 1280) {
    w = 140 
  } else if (windowWidth >= 481 && windowWidth < 769){
    w = 180
  } else {
    w = 240
  }

  let c = createCanvas(windowWidth, windowHeight - w );
  c.position(0, w); 
  background('white');

  labelX = createDiv('x value:'  + sliderX.value()); 
  sliderX = createSlider(1, 500, 240); 
  sliderX.parent(labelX);

  labelY = createDiv('y value'); 
  sliderY = createSlider(1, 500, 377); 
  sliderY.parent(labelY);

  labelR = createDiv('rotation'); 
  sliderR = createSlider(0, 100, 59); 
  sliderR.parent(labelR);

  labelS = createDiv('size'); 
  sliderS = createSlider(10, 2000, 600); 
  sliderS.parent(labelS);
  
  labelInvert = createDiv(); 
  buttonInvert = createButton('invert'); 
  buttonInvert.parent(labelInvert);
  buttonInvert.mousePressed(invert);
  buttonInvert.class('button');

  labelPause = createDiv(); 
  buttonPause = createButton('pause'); 
  buttonPause.parent(labelPause);
  buttonPause.mousePressed(pause);
  buttonPause.class('button');
  
  labelReset = createDiv(); 
  buttonReset = createButton('restart'); 
  buttonReset.parent(labelReset);
  buttonReset.mousePressed(windowResized);
  buttonReset.class('button');

  labelSave = createDiv(); 
  buttonSave = createButton('save'); 
  buttonSave.parent(labelSave);
  buttonSave.mousePressed(saveArt);
  buttonSave.class('button');
  
  // back to gallery
  backButton = createA('https://sajump-ixd.github.io/hwg/index.html', '« gallery'); 
  }
  
  // pause button
  function pause(){
    if (p == 0 ){
     noLoop();
     p = 255;
   } else if (p == 255){
       loop();
       p = 0;
   }
  }

  function windowResized() {
    p = 255;
    pause();
    resizeCanvas(windowWidth, windowHeight - w);
    if (i == 0){
      background('white');
    } else {
      background('black');
    }
    c.position(0, w);
  }; 


 
  function invert(){
    if (i == 0){
      i = 255; 
    } else {
      i = 0;
    }
    filter(INVERT);
  };
  
  function draw() { 
    
    if (i == 0){
      g = 0;
    } else {
      g = 255;
    }
    
    noFill();
    stroke(g, 10); 
    var t = frameCount;
    var s = (sliderS.value());
    var r = (sliderR.value());
    var x = (sliderX.value());
    var y = (sliderY.value());
    
    translate(windowWidth / 2, (windowHeight-w) / 2);
		rotate(t / r);
    ellipse(0, 0, sin(t / x) * s, cos(t / y) * s);
  };
  
  // save as a jpg
  function saveArt() {
    saveCanvas( 'Ellipsy', 'jpg')
  }
