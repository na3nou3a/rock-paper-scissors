let values = ["rock", "paper", "scissors"];

function shuffle(array) {
  let shuffled = array.slice(0); //copy of original
  let l = shuffled.length;
  let i, j, k;
  for (i = l - 1; i > 0; i--) {
    j = Math.floor(Math.random() * i);
    k = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = k;
  }
  return shuffled;
}

function computer(arr) {
  let shuffledValues = shuffle(arr);
  let random = Math.floor(Math.random() * arr.length);
  return shuffledValues[random];
}

function playGame(choice) {
  let playerChoice = choice;
  let computerChoice = computer(values);
  document.getElementById("player").innerHTML = playerChoice;
  document.getElementById("computer").innerHTML = computerChoice;
  let result = document.getElementById("result");
  let rock = document.getElementById("rock").innerHTML.toLowerCase();
  let paper = document.getElementById("paper").innerHTML.toLowerCase();
  let scissors = document.getElementById("scissors").innerHTML.toLowerCase();

  if (computerChoice === playerChoice) {
    return (result.innerHTML = "Result: Push" + "<br>" + "Try Again!");
  } else if (computerChoice === rock && playerChoice === paper) {
    return (result.innerHTML = "You Won!" + "<br>" + "paper beats rock!");
  } else if (computerChoice === paper && playerChoice === rock) {
    return (result.innerHTML = "You Lose!" + "<br>" + "paper beats rock!");
  } else if (computerChoice === scissors && playerChoice === rock) {
    return (result.innerHTML = "You Won!" + "<br>" + "rock beats scissors!");
  } else if (computerChoice === rock && playerChoice === scissors) {
    return (result.innerHTML = "You Lose!" + "<br>" + "rock beats scissors!");
  } else if (computerChoice === paper && playerChoice === scissors) {
    return (result.innerHTML = "You Won!" + "<br>" + "scissors beats paper!");
  } else {
    return (result.innerHTML = "You Lose!" + "<br>" + "scissors beats paper!");
  }
}
