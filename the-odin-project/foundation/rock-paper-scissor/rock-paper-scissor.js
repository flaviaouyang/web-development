let comScore = 0;
let playScore = 0;
let player = "";
let round = 0;

// if (round === 10) {
//   // document.write("GAME OVER!");
//   console.log("Game Over!");
// }

const rock = document.querySelector("#btn-rock");
const paper = document.querySelector("#btn-paper");
const scissors = document.querySelector("#btn-scissors");

const compMove = document.querySelector("#computer-move");
const playMove = document.querySelector("#player-move");

const compScoreDisplay = document.querySelector("#computer-score");
const playScoreDisplay = document.querySelector("#player-score");

const roundDisplay = document.querySelector("#rounds");

rock.addEventListener("click", function () {
  playRound("Rock");
  playMove.textContent = "Rock";
  round++;
  roundDisplay.textContent = round;
});
paper.addEventListener("click", function () {
  playRound("Paper");
  playMove.textContent = "Paper";
  round++;
  roundDisplay.textContent = round;
});
scissors.addEventListener("click", function () {
  playRound("Scissors");
  playMove.textContent = "Scissors";
  round++;
  roundDisplay.textContent = round;
});

function computerPlay() {
  // put rock paper scissors into an array
  let gesture = ["Rock", "Paper", "Scissors"];
  let which = Math.floor(Math.random() * 3);
  compMove.textContent = gesture[which];
  return gesture[which];
}

// console.log(computerPlay(gesture));

function playRound(player) {
  // let player = window.prompt("Your turn: ");
  let computer = computerPlay();

  console.log("Player: " + player);
  console.log("Computer: " + computer);

  if (computer === player) {
    console.log("Tie");
    compScoreDisplay.textContent = comScore;
    playScoreDisplay.textContent = playScore;
  }
  if (computer === "Rock" && player === "Scissors") {
    comScore += 1;
    compScoreDisplay.textContent = comScore;
    playScoreDisplay.textContent = playScore;
    console.log("Computer won.");
  }

  if (computer === "Paper" && player === "Rock") {
    comScore += 1;
    compScoreDisplay.textContent = comScore;
    playScoreDisplay.textContent = playScore;
    console.log("Computer won.");
  }

  if (computer === "Scissors" && player === "Paper") {
    comScore += 1;
    compScoreDisplay.textContent = comScore;
    playScoreDisplay.textContent = playScore;
    console.log("Computer won.");
  }

  if (computer === "Rock" && player === "Paper") {
    playScore += 1;
    compScoreDisplay.textContent = comScore;
    playScoreDisplay.textContent = playScore;
    console.log("Player won.");
  }

  if (computer === "Paper" && player === "Scissors") {
    playScore += 1;
    compScoreDisplay.textContent = comScore;
    playScoreDisplay.textContent = playScore;
    console.log("Player won.");
  }

  if (computer === "Scissors" && player === "Rock") {
    playScore += 1;
    compScoreDisplay.textContent = comScore;
    playScoreDisplay.textContent = playScore;
    console.log("Player won.");
  }
}


