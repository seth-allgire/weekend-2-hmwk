let startButton = document.querySelector("#start-button");
startButton.addEventListener("click", countdown);
startButton.addEventListener("click", holeCycle);

let gameTimer = document.querySelector(".seconds");
let time = 5;
gameTimer.innerHTML = `${time}`;

// let countdown = setInterval(() => {
//   time--;
//   gameTimer.innerHTML = `${time}`;
//   if (time === 0) {
//     clearInterval(countdown);
//   }
// }, 1000);

function countdown() {
  setInterval(function () {
    time--;
    gameTimer.innerHTML = `${time}`;
    if (time === 0) {
      clearInterval(countdown);
    }
  }, 1000);
}

// USE THIS: IT WORKS SO FAR!!!!
const holeDivs = document.querySelectorAll(".mole-hole");

function holeCycle() {
  let activeMole = holeDivs[Math.floor(Math.random() * holeDivs.length)];
  activeMole.style.backgroundColor = "#FF00FF";
  setTimeout(() => {
    activeMole.style.backgroundColor = "orange";
    setTimeout(holeCycle, 500);
  }, 900);
}
// holeCycle(); ???LEAVE-THIS-COMMENTED-OUT-FOREVER???
