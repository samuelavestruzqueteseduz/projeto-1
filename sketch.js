function setup() {
    createCanvas(800, 800);
    background ("purple");
  }
  
  function draw() {
    stroke("green");
    fill("cyan");
    
    if(mouseIsPressed) {
  rect (mouseX, mouseY, 20, 20);
   }
  }  