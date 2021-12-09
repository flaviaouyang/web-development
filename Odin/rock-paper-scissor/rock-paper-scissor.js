let comScore = 0;
let playScore = 0;
let player = "";

const rock = document.querySelector("#btn-rock");
const paper = document.querySelector("#btn-paper");
const scissors = document.querySelector("#btn-scissors");

rock.addEventListener("click", function () {
  playRound("Rock");
});
paper.addEventListener("click", function () {
  playRound("Paper");
});
scissors.addEventListener("click", function () {
  playRound("Scissors");
});

function computerPlay() {
  // put rock paper scissors into an array
  let gesture = ["Rock", "Paper", "Scissors"];
  let which = Math.floor(Math.random() * 3);
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
  }
  if (computer === "Rock" && player === "Scissors") {
    comScore += 1;
    console.log("Computer won.");
  }

  if (computer === "Paper" && player === "Rock") {
    comScore += 1;
    console.log("Computer won.");
  }

  if (computer === "Scissors" && player === "Paper") {
    comScore += 1;
    console.log("Computer won.");
  }

  if (computer === "Rock" && player === "Paper") {
    playScore += 1;
    console.log("Player won.");
  }

  if (computer === "Paper" && player === "Scissors") {
    playScore += 1;
    console.log("Player won.");
  }

  if (computer === "Scissors" && player === "Rock") {
    playScore += 1;
    console.log("Player won.");
  }
}
