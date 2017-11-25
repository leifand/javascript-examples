/*
  xmob.js movable object class for 2d graphics display
  update to version 1 - leif anderson 11/24/17
*/

//const BBox = require('./bbox.js').BBox;
console.log("LOADING XMOB ....");

class XMOB { // defines a polygon
  constructor(bounding_box, mob_color) {
    this.px = [];
    this.py = [];
    this.vector_length = 0;
    this.bbox = bounding_box;
    this.mob_color = mob_color;
    this.velocity = 0.0;
    this.direction_inc = 0.0;
    this.angle = 0.0; // radians
    this.cos = 0.0;
    this.sin = 0.0;
    this.dead = false;
    this.display_w = 0;
    this.display_h = 0;
  };

  setDisplay(width, height) {
    this.display_w = width;
    this.display_h = height;
  };

  die() {
    this.dead = true;
    this.bbox.min_x = this.display_w + 1;
    this.bbox.min_y = this.display_h + 1;
    this.bbox.max_x = this.min_x + 1;
    this.bbox.max_y = this.min_y + 1;
    this.doneMinMax();
  };

  isDead() {
    return this.dead;
  };

  getBoundingBox() {
    return this.bbox;
  };

  setShape(px, py) {
    this.px = dx;
    this.py = dy;
    this.vector_length = dx.length;
  };

  setVelocity(velocity) {
    this.velocity = velocity;
  };

  setRotationAngle() {
    this.angle *= Math.PI / 180;
    this.cos = Math.cos(angle);
    this.sin = Math.sin(angle);
    this.direction_inc = this.angle;
  };

  scale(factor) {
    for(let i = 0; i < this.vector_length; i++) {
      this.px[i] *= factor;
      this.py[i] *= factor;
    }
  };

  rotate() {
    let t1 = null;
    let t2 = null;
    for (let i = 0; i < this.vector_length; i++) {
      t1 = px[i] * cos + py[i] * sin;
      t2 = py[i] * cos - px[i] * sin;
      px[i] = t1;
      py[i] = t2;
    }
  };

  //moveMOB() {};

  //calculateBoundingBox() {};

  //doneMinMax(){};

  //checkBounce() {};
};
//export.XMOB = XMOB;
console.log(".... DONE");
