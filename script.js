const playerScore = document.getElementById("playerScore");

const playerChoice = document.getElementById("playerChoice");

const computerScore = document.getElementById("computerScore");

const computerChoice = document.getElementById("computerChoice");

const playerScissor = document.getElementById("playerScissor");
const playerPaper = document.getElementById("playerPaper");
const playerRock = document.getElementById("playerRock");

const computerScissor = document.getElementById("computerScissor");
const computerPaper = document.getElementById("computerPaper");
const computerRock = document.getElementById("computerRock");

const resultText = document.getElementById("resultText");

const allGameImg = document.querySelectorAll("img");

const reset = document.getElementById('reset');


const selections = {
    Scissor: {name:'Scissor', defeat:'Paper'},
    Paper: {name:'Paper', defeat:'Rock'},
    Rock: {name:'Rock', defeat:'Scissor'}
};



let computerSelect = "";
let playerScoreNumber = 0;
let computerScoreNumber = 0;

// Update Score
const updateScore = function(playerSelect){
    console.log(playerSelect,computerSelect);
    const select = selections[playerSelect];
    if(playerSelect === computerSelect){
        resultText.textContent = "It's a tie";
        document.body.style.backgroundColor = "white";
    }
    else if(select.defeat.indexOf(computerSelect) > -1){
        resultText.textContent = "You Won!";
        document.body.style.backgroundColor = "green";
        playerScoreNumber++;
        playerScore.textContent = playerScoreNumber;
    }
    else{
        resultText.textContent = "You Lost";
        document.body.style.backgroundColor = "Red";
        computerScoreNumber++;
        computerScore.textContent = computerScoreNumber;
    }
}

// Random Computer Choice
const computerRandomSelect = function () {
  const computerSelectNumber = Math.random();
  console.log(computerSelectNumber);

  if (computerSelectNumber <= 0.3) {
    computerSelect = "Scissor";
  } else if (computerSelectNumber <= 0.7) {
    computerSelect = "Paper";
  } else {
    computerSelect = "Rock";
  }
  displayComputerSelect(computerSelect);
};

//Passing Computer selection and styling buttons
const displayComputerSelect = function(computerSelect){
    switch (computerSelect) {
        case "Scissor":
          computerScissor.classList.add("selected");
          computerChoice.textContent = "--- Scissor";
          break;
        case "Paper":
          computerPaper.classList.add("selected");
          computerChoice.textContent = "--- Paper";
          break;
        case "Rock":
          computerRock.classList.add("selected");
          computerChoice.textContent = "--- Rock";
          break;
        default:
          break;
      }
}

// Reset selected
const resetSelected = function () {
  allGameImg.forEach((img) => {
    img.classList.remove("selected");
  });
};

// Passing the player selection
const select = function (playerSelect) {
  resetSelected();
  //styling the playerSelection

  switch (playerSelect) {
    case "Scissor":
      playerScissor.classList.add("selected");
      playerChoice.textContent = "--- Scissor";
      break;
    case "Paper":
      playerPaper.classList.add("selected");
      playerChoice.textContent = "--- Paper";
      break;
    case "Rock":
      playerRock.classList.add("selected");
      playerChoice.textContent = "--- Rock";
      break;
    default:
      break;
  }
  computerRandomSelect();
  updateScore(playerSelect);
};


// playerScissor.addEventListener('click', playerTurns);
// playerPaper.addEventListener('click', playerTurns);
// playerRock.addEventListener('click', playerTurns);
