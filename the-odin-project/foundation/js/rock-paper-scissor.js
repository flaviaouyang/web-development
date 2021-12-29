let comScore = 0;
let playScore = 0;

function computerPlay() {
  // put rock paper scissors into an array
  let gesture = ["Rock", "Paper", "Scissors"];
  let which = Math.floor(Math.random() * 3);
  return gesture[which];
}

// console.log(computerPlay(gesture));

function playRound() {
  let player = window.prompt("Your turn: ");
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
    comScore += 1;;
    console.log("Computer won.");
  }

  if (computer === "Rock" && player === "Paper") {
    playScore += 1;;
    console.log("Player won.");
  }

  if (computer === "Paper" && player === "Scissors") {
    playScore += 1;;
    console.log("Player won.");
  }

  if (computer === "Scissors" && player === "Rock") {
    playScore += 1;;
    console.log("Player won.");
  }
}
let i = 0;
while (i < 3) {
  playRound();
  i++;
}
console.log("Game over.");
console.log("Player: " + playScore);
console.log("Computer: " + comScore);
