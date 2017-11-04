/*
  mob.js movable object class for 2d graphics display
  leif anderson 10/30/17
*/

const BBox = require('./bbox.js').BBox;

class MOB { // defines a polygon
  constructor(bounding_box, mob_color) {
    this.dx = [];
    this.dy = [];
    this.vector_length = 0;
    this.min_x = bounding_box.min_x;
    this.min_y = bounding_box.min_y;
    this.max_x = bounding_box.max_x;
    this.max_y = bounding_box.max_y;
    this.mob_color = mob_color;
    this.velocity = 0.0;
    this.direction_inc = 0.0;
    this.angle = 0.0; // radians
    this.cos = 0.0;
    this.sin = 0.0;
    this.dead = false;
    this.display_w = 0;
    this.display_h = 0;
  }
  setDisplay(width, height) {
    this.display_w = width;
    this.display_h = height;
  }
  draw() {
  }
  animate() {
  }
  collide(mob) {
  }
  die() {
    this.dead = true;
    this.min_x = this.display_w + 1;
    this.min_y = this.display_h + 1;
    this.max_x = this.min_x + 1;
    this.max_y = this.min_y + 1;
    this.doneMinMax();
  }
  isDead() {
    return this.dead;
  }
  getBoundingBox() {
  }
  setShape(dx, dy) {
    this.dx = dx;
    this.dy = dy;
  }
  setVelocity(velocity) {
    this.velocity = velocity;
  }
  setRotationAngle() {
    this.angle *= Math.PI / 180;
    this.cos = Math.cos(angle);
    this.sin = Math.sin(angle);
    this.direction_inc = this.angle;
  }
  scale(factor) {
    for(let i = 0; i < this.vector_length; i++) {
      this.dx[i] *= factor;
      this.dy[i] *= factor;
    }
  }
  translate(x, y) {
    for(let i = 0; i < this.vector_length; i++) {
      this.dx[i] += x;
      this.dy[i] += y;
    }
  }
  rotateMOB() {
    if (this.isDead()) return;
    let t1 = 0.0;
    let t2 = 0.0;
    // here be dragons ... need to manage floating point precision
    //low_x =
    //low_y =
    for (let v = 0; v < this.vector_length; v++) {
      t1 = this.dx[v] * this.cos + this.dy[v] * this.sin;
      t2 = this.dy[v] * this.cos - this.dx[v] * this.sin;
      this.dx[v] = t1;
      this.dy[v] = t2;
    }
  }
  moveMOB() {
  }
  calculateBoundingBox() {
  }
  doneMinMax(){
  }
  //checkBounce() {}
}

export.MOB = MOB;
