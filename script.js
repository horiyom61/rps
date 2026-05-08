const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");
const score = document.querySelector("#score");
const winner = document.querySelector("#winner");
const replay = document.querySelector("#replay");

function getComputerChoice() {
   let number = Math.floor(Math.random() * 3) + 1;
    let computerResult = "";

   if (number === 1) {
     computerResult = "rock"
   } else if (number === 2) {
    computerResult = "paper"
   } else if (number === 3) {
    computerResult = "scissors"
   }
   return computerResult
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let draw = 0;

    winner.textContent = "";
result.textContent = "";
score.textContent = "";
replay.style.display = "none";


    function playRound(humanChoice, computerChoice) {
  
    if (computerChoice === "rock" && humanChoice === "rock") {
        result.textContent = "It's a draw, nobody wins!"
        draw++;
    } else if (computerChoice === "paper" && humanChoice === "paper") {
        result.textContent = "It's a draw, nobody wins!"
        draw++
    } else if (computerChoice === "scissors" && humanChoice === "scissors") {
        result.textContent = "It's a draw, nobody wins!"
        draw++;
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        result.textContent = "Human won, paper beats rock!"
        humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        result.textContent = "Computer won, rock beats scissors!"
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        result.textContent = "Computer won, paper beats rock!"
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        result.textContent = "Human won, scissors beats paper!"
        humanScore++;
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        result.textContent = "Human won, rock beats scissors!"
        humanScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        result.textContent = "Computer won, scissors beats paper!"
    }

   score.textContent = "Human: " + humanScore + " - Computer: " + computerScore;

   if (humanScore === 5) {
    winner.textContent = "The Human won, Humans are superior!"

    rock.removeEventListener("click", handleRock);
    paper.removeEventListener("click", handlePaper);
    scissors.removeEventListener("click", handleScissors);

    replay.style.display = "block";

} else if (computerScore === 5) {
    winner.textContent = "The Computer won, Computers are superior!"

    rock.removeEventListener("click", handleRock);
    paper.removeEventListener("click", handlePaper);
    scissors.removeEventListener("click", handleScissors);

    replay.style.display = "block";
}

    }


    function handleRock() {
    let computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
}

rock.addEventListener("click", handleRock);

function handlePaper() {
    let computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
}

paper.addEventListener("click", handlePaper);

function handleScissors() {
    let computerChoice = getComputerChoice();
    playRound("scissors", computerChoice);
}

scissors.addEventListener("click", handleScissors);

}

playGame()

function replayGame() {
    playGame();
}

replay.addEventListener("click", replayGame);
