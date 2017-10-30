/*
  mob.js movable object class for 2d graphics display
  leif anderson 10/30/17
*/

const BBox = require('./bbox.js').BBox;

class MOB { // defines a polygon
  constructor(bounding_box, mob_color) {
    this.xpoints = [];
    this.ypoints = [];
    this.vector_length = 0;
    this.bounding_box = bounding_box;
    this.mob_color = mob_color;
    this.velocity = 0.0;
    this.direction_inc = 0.0;
    this.cos = 0.0;
    this.sin = 0.0;
  }
  draw() {
  }
  animate() {
  }
  collide(mob) {
  }
  die() {
  }
  isDead() {
  }
  getBoundingBox() {
  }
  setShape(xpoints, ypoints) {
    this.xpoints = xpoints;
    this.ypoints = ypoints;
  }
  setVelocity(velocity) {
    this.velocity = velocity;
  }
  setRotationAngle(angle) {
    angle *= Math.PI / 180;
    cos = Math.cos(angle);
    sin = Math.sin(angle);
    direction_inc = angle;
  }
  scale(factor) {
    for(let i = 0; i < this.vector_length; i++) {
      this.xpoints[i] *= factor;
      this.ypoints[i] *= factor;
    }
  }
  translate(x, y) {
    for(let i = 0; i < this.vector_length; i++) {
      this.xpoints[i] += x;
      this.ypoints[i] += y;
    }
  }
  rotateMOB() {
  }
  moveMOB() {
  }
  calculateBoundingBox() {
  }
  //checkBounce() {}
}

export.MOB = MOB;
