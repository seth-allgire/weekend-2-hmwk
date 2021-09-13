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

let startButton = document.querySelector("#start-button");
startButton.addEventListener("click", countdown);
startButton.addEventListener("click", moleCycle);

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
      startButton.removeEventListener("click", countdown);
    }
  }, 1000);
}

function moleCycle() {
  let activeHole = holes[Math.floor(Math.random() * holes.length)];
  activeHole.style.backgroundColor = "#FF00FF";
  activeHole.classList.add("mole");
  setTimeout(() => {
    activeHole.style.backgroundColor = "orange";
    activeHole.classList.remove("mole");
    if (time === 0) {
      clearTimeout;
    } else setTimeout(moleCycle, 700);
  }, 900);
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
  startButton.addEventListener("click", countdown);
}
