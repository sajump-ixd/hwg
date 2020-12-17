let sliderSpeed; // speed
let sliderW; // weight 
let sliderA; // alpha channel
let sliderM; // size
let sliderR; // rotation
let sliderS; // x value
let sliderV; // y value
let buttonReset; // start
let buttonSave; // save
let buttonPause; // pause
let p = 0; // pause 
  
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

  labelS = createDiv('x value'); 
  sliderS = createSlider(1, 500, 240); 
  sliderS.parent(labelS);

  labelV = createDiv('y value'); 
  sliderV = createSlider(1, 500, 377); 
  sliderV.parent(labelV);

  labelR = createDiv('rotation'); 
  sliderR = createSlider(0, 100, 59); 
  sliderR.parent(labelR);

  // labelW = createDiv('thickness'); 
  // sliderW = createSlider(1, 15, 2); 
  // sliderW.parent(labelW);

  labelA = createDiv('opacity'); 
  sliderA = createSlider(10, 100, 20); 
  sliderA.parent(labelA);
    
  // labelSpeed = createDiv('speed'); 
  // sliderSpeed = createSlider(6, 300, 80);
  // sliderSpeed.parent(labelSpeed);

  labelM = createDiv('size'); 
  sliderM = createSlider(10, 2000, 600); 
  sliderM.parent(labelM);



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
  

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight - w);
    background('white');
    c.position(0, w);
    if (p == 255){
      loop();
      p = 0; }
  
  } 
  
  function draw() { 
    noFill();
    let a = (sliderA.value());
    stroke(0, a); 
    //strokeWeight(sliderW.value()); 
    //frameRate(sliderSpeed.value());
    var t = frameCount;
    var m = (sliderM.value());
    var r = (sliderR.value());
    var s = (sliderS.value());
    var v = (sliderV.value());
    
    translate(windowWidth / 2, (windowHeight-w) / 2);
		rotate(t / r);
		ellipse(0, 0, sin(t / s) * m, cos(t / v) * m);
	};
  

  // save as a jpg
  function saveArt() {
    saveCanvas( 'Ellipsy', 'jpg')
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