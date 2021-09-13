const holes = document.querySelectorAll(".hole");

let mole = document.getElementsByClassName(".mole");

let timer;
let activeHole;

let gameTimer = document.querySelector(".seconds");
let time = 20;
gameTimer.textContent = `${time}`;

let scoreKeeper = document.querySelector(".score-count");
let score = 0;
scoreKeeper.textContent = `${score}`;

let noviceButton = document.querySelector("#novice-button");
noviceButton.addEventListener("click", countdown);
noviceButton.addEventListener("click", moleNovice);

let expertButton = document.querySelector("#expert-button");
expertButton.addEventListener("click", countdown);
expertButton.addEventListener("click", moleExpert);

let resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", gameReset);

function countdown() {
  timer = setInterval(() => {
    time--;
    gameTimer.textContent = `${time}`;
    if (time <= 0) {
      clearInterval(timer);
      gameTimer.textContent = `GAME OVER`;
      console.log(gameTimer.textContent);
      resetButton.addEventListener("click", gameReset);
    }
  }, 1000);
}

function moleNovice() {
  let activeHole = holes[Math.floor(Math.random() * holes.length)];
  activeHole.style.backgroundColor = "#FF00FF";
  activeHole.classList.add("mole");
  noviceButton.removeEventListener("click", countdown);
  expertButton.removeEventListener("click", countdown);
  noviceButton.removeEventListener("click", moleNovice);
  expertButton.removeEventListener("click", moleExpert);
  resetButton.removeEventListener("click", gameReset);
  setTimeout(() => {
    activeHole.style.backgroundColor = "orange";
    activeHole.classList.remove("mole");
    if (time === 0) {
      clearTimeout;
    } else setTimeout(moleNovice, 700);
  }, 900);
}

function moleExpert() {
  let activeHole = holes[Math.floor(Math.random() * holes.length)];
  activeHole.style.backgroundColor = "#FF00FF";
  activeHole.classList.add("mole");
  noviceButton.removeEventListener("click", countdown);
  expertButton.removeEventListener("click", countdown);
  noviceButton.removeEventListener("click", moleNovice);
  expertButton.removeEventListener("click", moleExpert);
  resetButton.removeEventListener("click", gameReset);
  setTimeout(() => {
    activeHole.style.backgroundColor = "orange";
    activeHole.classList.remove("mole");
    if (time === 0) {
      clearTimeout;
    } else setTimeout(moleExpert, 500);
  }, 700);
}

holes.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("mole")) {
      score++;
      scoreKeeper.textContent = `${score}`;
    }
  });
});

function gameReset() {
  time = 20;
  score = 0;
  scoreKeeper.textContent = `${score}`;
  gameTimer.textContent = `${time}`;
  noviceButton.addEventListener("click", countdown);
  expertButton.addEventListener("click", countdown);
}
