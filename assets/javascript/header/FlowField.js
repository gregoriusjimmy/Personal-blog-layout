class FlowField{

  constructor(){
    this.resolution = 10;
    this.cols = width / this.resolution;
    this.rows = height / this.resolution;
    //this.field = make2DArray(this.columns,this.rows);
    this.field =[];
    this.field = this.make2DArray(this.cols);
    this.init();
  }

  make2DArray(n){
    let arr = [];
    for(let i = 0 ; i < n ; i++){
      if (!arr[i]) arr[i] = [];
    }
    return arr;
  }

  init(){
    noiseSeed(Math.floor(random(1000)));
    let xoff = 0;
    for(let i = 0; i <this.cols ; i++){
      let yoff= 0;
      for(let j = 0; j < this.rows; j++){
        let theta = map(noise(xoff,yoff),0,1,0,TWO_PI);
        this.field[i][j] = createVector(cos(theta),sin(theta));
        yoff++;
      }
      xoff++;
    }
  }

  lookup(lookup){
  let  column = constrain(lookup.x/this.resolution,0,this.cols-1)
  let  row = constrain(lookup.y/this.resolution,0,this.rows-1)

    return this.field[Math.floor(column)][Math.floor(row)].copy();
  }
}
