let space = document.getElementById("clock");
let startBtn = document.getElementById("start");
let reset = document.getElementById("reset");
console.log(reset);
console.log(space);

let y = parseInt(sessionStorage.getItem("time")) || 0;

function addTimer() {
  setInterval(() => {
    space.innerHTML = y++;
    sessionStorage.setItem("time", y);
  }, 1000);
}

// window.onload = addTimer;
