
let snows = [];
function windowResized(){
  resizeCanvas(windowWidth,200);
}

function setup(){
  canvas = createCanvas(windowWidth,500);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  for(let i = 0; i < 50; i++){
    snows[i] = new Snow(random(0,width),random(height),random(30,50));
  }

}

function draw(){
background(0);

  for(let i = 0; i < snows.length ; i++){
    if(random(1) <0.5){
    snows[i].display();
  }
    snows[i].edge();
    snows[i].update();
  }


}
