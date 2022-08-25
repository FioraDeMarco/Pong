/*
Game runs in an update loop
Positions get updated inside of the loop
Separated into separate classes
*/
import Ball from "./Ball.js";

const ball = new Ball(document.getElementById("ball"));

let lastTime;
function update(time) {
  if (lastTime !== null) {
    const delta = time - lastTime;
    ball.update(delta);
  }

  lastTime = time;
  window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);
