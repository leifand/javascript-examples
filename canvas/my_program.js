/*
    my_program.js

    Dallas Young Makers

    <your name>
*/

// gc : graphics context - access to Canvas graphics api.
//
let gc = null;

// IntervalId - Used to call draw() repeatedly (the game loop).
//
let intervalId = null;

window.onload = function(){

    gc = document.getElementById("canvas").getContext("2d");
    intervalId = setInterval(draw, 100); // call draw every 100ms
};

function draw() {
    gc.strokeStyle = "blue";
    gc.strokeRect(10, 10, 150, 50);

    gc.fillStyle = "rgba(218, 0, 0, 0.4)";
    gc.fillRect(150, 30, 75, 75);

    gc.stokeStyle = "orange";
    gc.beginPath();
    gc.lineTo(100,100);
    gc.lineTo(150, 150);
    gc.closePath();
    gc.stroke();
};