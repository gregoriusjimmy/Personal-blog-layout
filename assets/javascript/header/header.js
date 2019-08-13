let vehicle;
let canvas;
let flowField;
let vehicles =[];
let n = 100;
function windowResized(){
  resizeCanvas(windowWidth,200);
}

function setup(){
  canvas = createCanvas(windowWidth,200);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  if(width < 600) n = 40;
  else if(width < 768) n = 70;
  for(let i = 0 ; i < n ; i++){
    vehicles[i] = new Vehicle(random(width),random(height));
  }
  flowField = new FlowField();

}

function draw(){
  background(255);

  for(let i = 0 ; i< vehicles.length ; i++){
    vehicles[i].run();
    vehicles[i].follow(flowField);
  }


}
