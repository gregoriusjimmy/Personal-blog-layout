class Vehicle{

  constructor(x,y,){
    this.location = createVector(x,y);
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);
    this.maxspeed =3;
    this.maxforce = 0.3;
    this.r = 10;
  }

  update(){
    this.location.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);
    this.acceleration.mult(0);
  }

  follow(target){
    let desired = target.lookup(this.location);
    desired.mult(this.maxspeed);

    let steer =  p5.Vector.sub(desired,this.velocity);
    steer.limit(this.maxforce);
    this.applyForce(steer);
  }

  applyForce(force){
    this.acceleration.add(force);
  }

  display(){
    let theta = this.velocity.heading() + HALF_PI;
    fill(0);
    stroke('#7b7c7c');
    push();
    translate(this.location.x,this.location.y);
    rotate(theta);
    beginShape();
    vertex(0,-this.r*2);
    vertex(-this.r,this.r*2);
    vertex(0,0);
    vertex(this.r,this.r*2);
    endShape();
    pop();

  }
  borders() {
  if (this.location.x < -this.r) this.location.x = width + this.r;
  if (this.location.y < -this.r) this.location.y = height + this.r;
  if (this.location.x > width + this.r) this.location.x = -this.r;
  if (this.location.y > height + this.r) this.location.y = -this.r;
}
run() {
    this.update();
    this.borders();
    this.display();
  }
}
