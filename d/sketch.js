let sliderSize; // size
let sliderY; // y value
let sliderA; // alpha
let buttonSave; // save
let buttonPause; // pause
let p = 0; // pause switcher
let t = 0; // time
let g; // gray value
let b; // background

  
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
  
  labelG = createDiv('dot'); 
  sliderG = createSlider(0, 255, 255); 
  sliderG.parent(labelG);

  labelB = createDiv('background'); 
  sliderB = createSlider(0, 255, 0); 
  sliderB.parent(labelB);

  labelA = createDiv('alpha'); 
  sliderA = createSlider(0, 100, 10);
  sliderA.parent(labelA);

  labelY = createDiv('y value'); 
  sliderY = createSlider(0, 360, 1); 
  sliderY.parent(labelY);

  labelSize = createDiv('size'); 
  sliderSize = createSlider(1, 30, 15); 
  sliderSize.parent(labelSize);

  labelT = createDiv('speed'); 	
  sliderT = createSlider(1, 30, 7);	
  sliderT.parent(labelT);

  labelPause = createDiv(); 
  buttonPause = createButton('pause'); 
  buttonPause.parent(labelPause);
  buttonPause.mousePressed(pause);
  buttonPause.class('button');

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
    resizeCanvas(windowWidth, windowHeight - w);
    c.position(0, w);
  }; 


  function draw() { 
    
    let g = (sliderG.value()); // gray dot value
    let b = (sliderB.value()); // background value
    var a = (sliderA.value()); // background opacity
    background(b, a);
    
    noStroke();

    for (let x = 0; x <= (width+18); x = x + 55) { 
      for (let y = 0; y <= (height+18); y = y + 18) { 
       
        const yAngle = map(sliderY.value(), 0, height, 13, 160, true);
        const xAngle = map(0, 0, width, 29, 200);
        
        const angle = yAngle * (y / height) + xAngle * (x / width);
       
        const myX = x + 20 * cos(2 * PI * t + angle);
        const myY = y + 20 * sin(2 * PI * t + angle);
      
        let size = (sliderSize.value());
        ellipse(myX, myY, size); 
      }
    }
  
    t = t + (sliderT.value()/1000); 
    
    fill(g);
  
  };
  
  // save as a jpg
  function saveArt() {
    saveCanvas( 'sketchD', 'jpg')
  }

