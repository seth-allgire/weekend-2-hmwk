const holes = document.querySelectorAll(".hole");

let mole = document.getElementsByClassName(".mole");

let timer;
let activeHole;

let result = document.querySelector("span");
let resultMessage = document.querySelector(".result");

let gameTimer = document.querySelector(".seconds");
let time = 20;
gameTimer.textContent = ":" + `${time}`;

let scoreKeeper = document.querySelector(".score-count");
let score = 0;
scoreKeeper.textContent = `${score}`;

let noviceButton = document.querySelector(".novice-button");
noviceButton.addEventListener("click", countdown);
noviceButton.addEventListener("click", moleNovice);

let expertButton = document.querySelector(".expert-button");
expertButton.addEventListener("click", countdown);
expertButton.addEventListener("click", moleExpert);

let resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", gameReset);

function countdown() {
  timer = setInterval(() => {
    time--;
    gameTimer.textContent = ":" + `${time}`;
    if (time === 0) {
      clearInterval(timer);
      resetButton.addEventListener("click", gameReset);
      result.innerText = `${score}` + " ";
      resultMessage.style.visibility = "visible";
    }
  }, 1000);
}

function moleNovice() {
  let activeHole = holes[Math.floor(Math.random() * holes.length)];
  noviceButton.style.visibility = "hidden";
  expertButton.style.visibility = "hidden";
  activeHole.style.backgroundColor = "#f7b05b";
  activeHole.classList.add("mole");
  resetButton.removeEventListener("click", gameReset);
  setTimeout(() => {
    activeHole.style.backgroundColor = "#555358";
    activeHole.classList.remove("mole");
    if (time === 0) {
      clearTimeout;
      resetButton.addEventListener("click", gameReset);
    } else setTimeout(moleNovice, 700);
  }, 900);
}

function moleExpert() {
  let activeHole = holes[Math.floor(Math.random() * holes.length)];
  noviceButton.style.visibility = "hidden";
  expertButton.style.visibility = "hidden";
  activeHole.style.backgroundColor = "#f7b05b";
  activeHole.classList.add("mole");
  resetButton.removeEventListener("click", gameReset);
  setTimeout(() => {
    activeHole.style.backgroundColor = "#555358";
    activeHole.classList.remove("mole");
    if (time === 0) {
      clearTimeout;
      resetButton.addEventListener("click", gameReset);
    } else setTimeout(moleExpert, 400);
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
  gameTimer.textContent = ":" + `${time}`;
  noviceButton.style.visibility = "visible";
  expertButton.style.visibility = "visible";
  noviceButton.addEventListener("click", countdown);
  expertButton.addEventListener("click", countdown);
  resultMessage.style.visibility = "hidden";
}
