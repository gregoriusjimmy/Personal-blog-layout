class Snow{

  constructor(_x,_y,_r){
    this.x = _x;
    this.y = _y;
    this.r = _r;
    this.opacity = random(150,255);
  }

  update(){
    this.y = this.y + 1;
    this.x = this.x + random(-2,2);
    // this.r = this.r + random(-2,2);
  }

  display(){
    push()
    fill(random(0,255), random(0,255), random(0,255));
    rect(this.x,this.y,this.r,this.r);
    pop()
  }
  edge(){
    if(this.x < 0) this.x = width;
    if(this.x > width) this.x = 0;
    if(this.y < 0) this.y = height;
    if(this.y > height) this.y = 0;
  }
}
