/*
    2d_test.js
    leif anderson
    1/17/19
*/

// globals
//
let px = [0, 32, 28, 20, 12, 4]; // x-points for test polygon
let py = [0, 8, 16, 20, 16, 24]; // y-points ...
const arr_len = 6;
let min_x = 100000.0;
let min_y = 100000.0;


// globals!
//
const angle = Math.PI/180; // radians
const cos = Math.cos(angle);
const sin = Math.sin(angle);

// gc : graphics context - access to Canvas graphics api.
//
let gc = null;

// IntervalId - Used to call draw() repeatedly (poor mans game loop).
// Using window.requestAnimationFrame(draw) would be preferable to create
// a better game loop, but may still be browser specific ...
//
let intervalId = null;

window.onload = function(){

    gc = document.getElementById("canvas").getContext("2d");
    intervalId = setInterval(draw, 100); // call draw every 100ms
};

function mob() {
    gc.clearRect(0, 0, 600, 600);
    gc.beginPath();
    for (let i = 0; i < arr_len; i++) {
        gc.lineTo(px[i], py[i]);
    }
    gc.closePath();
    gc.stroke();
};

function translate(dx, dy) {
    for (let i = 0; i < arr_len; i++) {
        px[i] += dx;
        py[i] += dy;
    }
};

function update_min(nx, ny) {
    min_x = Math.min(nx, min_x);
    min_y = Math.min(ny, min_y);
}

function set_mins() {
    for (let i=0; i < arr_len; i++) update_min(px[i], py[i]);
}

function rotate() {
    set_mins();
    let low_x = 100000.0;
    let low_y = 100000.0;    
    let t1 = null;
    let t2 = null;
    for (let i = 0; i < arr_len; i++) {
        t1 = px[i] * cos + py[i] * sin;
        t2 = py[i] * cos - px[i] * sin;
        px[i] = t1;
        py[i] = t2;
        low_x = Math.min(low_x, px[i]);
        low_y = Math.min(low_y, py[i]);
        console.log("t1:", t1, " t2:", t2, " low_x:", low_x, " low_y:", low_y);
    }
    let off_x = min_x - low_x;
    let off_y = min_y - low_y;
    console.log(off_x, off_y);
    translate(off_x, off_y);
};

function draw() {
    mob();
    translate(100,100);
    rotate();
};

function test() {
    rotate();
    console.log('entering 2nd rotation ...');
    rotate();
    console.log(px);
    console.log(py);
};

//test();