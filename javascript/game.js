let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let l = choices.length;
  let i, j, k;
  for (i = l - 1; i > 0; i--) {
    j = Math.floor(Math.random() * i);
    k = choices[i];
    choices[i] = choices[j];
    choices[j] = k;
  }
  let random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function playRound(playerChoice, computerChoice) {
  document.getElementById("player").innerHTML = playerChoice;
  document.getElementById("computer").innerHTML = computerChoice;

  if (computerChoice == "rock" && playerChoice == "paper") {
    document.getElementById("result").innerHTML =
      "You Won!" + "<br>" + "paper beats rock!";
    playerScore++;
    document.getElementById(
      "score"
    ).innerHTML = `You: ${playerScore} Computer: ${computerScore}<br>`;
    return finalScore();
  }

  if (computerChoice == "paper" && playerChoice == "rock") {
    document.getElementById("result").innerHTML =
      "You Lose!" + "<br>" + "paper beats rock!";
    computerScore++;
    document.getElementById(
      "score"
    ).innerHTML = `You: ${playerScore} Computer: ${computerScore}<br>`;
    return finalScore();
  }

  if (computerChoice == "scissors" && playerChoice == "rock") {
    document.getElementById("result").innerHTML =
      "You Won!" + "<br>" + "rock beats scissors!";
    playerScore++;
    document.getElementById(
      "score"
    ).innerHTML = `You: ${playerScore} Computer: ${computerScore}<br>`;
    return finalScore();
  }

  if (computerChoice == "rock" && playerChoice == "scissors") {
    document.getElementById("result").innerHTML =
      "You Lose!" + "<br>" + "rock beats scissors!";
    computerScore++;
    document.getElementById(
      "score"
    ).innerHTML = `You: ${playerScore} Computer: ${computerScore}<br>`;
    return finalScore();
  }

  if (computerChoice == "paper" && playerChoice == "scissors") {
    document.getElementById("result").innerHTML =
      "You Won!" + "<br>" + "scissors beats paper!";
    playerScore++;
    document.getElementById(
      "score"
    ).innerHTML = `You: ${playerScore} Computer: ${computerScore}<br>`;
    return finalScore();
  }

  if (computerChoice == "scissors" && playerChoice == "paper") {
    document.getElementById("result").innerHTML =
      "You Lose!" + "<br>" + "scissors beats paper!";
    computerScore++;
    document.getElementById(
      "score"
    ).innerHTML = `You: ${playerScore} Computer: ${computerScore}<br>`;
    return finalScore();
  }
  if (computerChoice == playerChoice) {
    document.getElementById("result").innerHTML =
      "Result: Tie" + "<br>" + "Try Again!";
    document.getElementById(
      "score"
    ).innerHTML = `You: ${playerScore} Computer: ${computerScore}<br>`;
    return finalScore();
  } else {
    return (document.getElementById("result").innerHTML = "unknown error!");
  }
}

function finalScore() {
  if (playerScore === 5 && computerScore < 5) {
    document.getElementById("score").innerHTML +=
      "Congratulation! You Won the Score!";
    document.getElementById("score").style.color = "green";
    return end();
  } else if (computerScore === 5 && playerScore < 5) {
    document.getElementById("score").innerHTML += "Sorry! You Lose the Score!";
    document.getElementById("score").style.color = "red";
    return end();
  }
}
function end() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
  document.getElementById("rock").style.cursor = "not-allowed";
  document.getElementById("paper").style.cursor = "not-allowed";
  document.getElementById("scissors").style.cursor = "not-allowed";
  document.getElementById("rock").style.pointerEvents = "none";
  document.getElementById("paper").style.pointerEvents = "none";
  document.getElementById("scissors").style.pointerEvents = "none";
  document.getElementById("replay").style.display = "block";
}
function replay() {
  document.location.href = "";
}
