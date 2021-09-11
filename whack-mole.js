let startButton = document.querySelector("#start-button");
startButton.addEventListener("click", countdown);
startButton.addEventListener("click", holeCycle);

let gameTimer = document.querySelector(".seconds");
let time = 5;
gameTimer.innerHTML = `${time}`;

function countdown() {
  setInterval(() => {
    time--;
    gameTimer.textContent = `${time}`;
    if (time === 0) {
      clearInterval(countdown);
    }
  }, 1000);
}

const holeDivs = document.querySelectorAll(".mole-hole");

function holeCycle() {
  let activeMole = holeDivs[Math.floor(Math.random() * holeDivs.length)];
  activeMole.style.backgroundColor = "#FF00FF";
  setTimeout(() => {
    activeMole.style.backgroundColor = "orange";
    if (time <= 0) {
      clearTimeout;
    } else setTimeout(holeCycle, 500);
  }, 900);
}

// // // THIS TIMER STOPS AT "0"
// countdown = setInterval(() => {
//   time--;
// gameTimer.innerHTML = `${time}`;
//   if (time === 0) {
//     clearInterval(countdown);
//   }
// }, 1000);

// THIS TIMER WORKS WITH EVENTLISTENER
// function countdown() {
//   setInterval(function () {
//     time--;
//     gameTimer.innerHTML = `${time}`;
//     if (time === 0) {
//       clearInterval(countdown);
//     }
//   }, 1000);
// }

// holeCycle(); ???LEAVE-THIS-COMMENTED-OUT-FOREVER???

// let countdown;
// let startButton = document.querySelector("#start-button");
// startButton.addEventListener("click", countdown);
// startButton.addEventListener("click", holeCycle);

// let gameTimer = document.querySelector(".seconds");
// let time = 5;
// gameTimer.innerHTML = `${time}`;

// //THIS TIMER STOPS AT "0"
// countdown = setInterval(() => {
//   time--;
//   gameTimer.innerHTML = `${time}`;
//   if (time === 0) {
//     clearInterval(countdown);
//   }
// }, 1000);

// //THIS TIMER WORKS WITH EVENTLISTENER
// // function countdown() {
// //   setInterval(function () {
// //     time--;
// //     gameTimer.innerHTML = `${time}`;
// //     if (time === 0) {
// //       clearInterval(countdown);
// //     }
// //   }, 1000);
// // }

// // USE THIS: IT WORKS SO FAR!!!!

// // holeCycle(); ???LEAVE-THIS-COMMENTED-OUT-FOREVER???

// USE THIS: IT WORKS SO FAR!!!!
// const holeDivs = document.querySelectorAll(".mole-hole");
// let activeMole = holeDivs[Math.floor(Math.random() * holeDivs.length)];
// function holeCycle() {
//   activeMole.style.backgroundColor = "#FF00FF";
//   setTimeout(() => {
//     activeMole.style.backgroundColor = "orange";
//     if (time === 0) {
//       clearTimeout;
//     } else setTimeout(holeCycle, 500);
//   }, 900);
// }
