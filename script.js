const container = document.querySelector(".container");
const gridButton = document.getElementById("submit-grid");
const clearGridButton = document.getElementById("clear-grid");
const gridWidth = document.getElementById("width-range");
const gridHeight = document.getElementById("height-range");
const colorButton = document.getElementById("color-input");
const eraseBtn = document.getElementById("erase-btn");
const paintBtn = document.getElementById("paint-btn");
const widthValue = document.getElementById("width-value");
const heightValue = document.getElementById("height-value");

const events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup"
  },
  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend"
  }
};


