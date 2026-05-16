const score = document.getElementById('score');
const result = document.getElementById('result');
const winner = document.getElementById('winner');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const replay = document.getElementById('replay');

function getComputerChoice() {
   let number = Math.floor(Math.random() * 3) + 1;
    let result = "";

   if (number === 1) {
     result = "rock"
   } else if (number === 2) {
    result = "paper"
   } else if (number === 3) {
    result = "scissors"
   }
   return result
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let draw = 0;

    result.textContent = "";
    score.textContent = "";
    winner.textContent = "";

    function playRound(humanChoice, computerChoice) {
  
    if (computerChoice === "rock" && humanChoice === "rock") {
        result.textContent = "It's a draw, nobody wins!"
        draw++;
    } else if (computerChoice === "paper" && humanChoice === "paper") {
        result.textContent = "It's a draw, nobody wins!"
        draw++;
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
        computerScore++;
    }

     score.textContent = "Human: " + humanScore + " - Computer: " + computerScore + " - Draw " + draw;
     

       if (humanScore === 5) {
        winner.textContent = "Humans won, we are the most superior one!!!"

           rock.removeEventListener("click", rockHandle);
        paper.removeEventListener("click", paperHandle);
        scissors.removeEventListener("click", scissorsHandle);

    } else if (computerScore === 5) {
        winner.textContent = "Computers won, Humans can not comprehend the digital mind!"

        rock.removeEventListener("click", rockHandle);
        paper.removeEventListener("click", paperHandle);
        scissors.removeEventListener("click", scissorsHandle);
    }
    }

    function rockHandle() {
        let computerChoice = getComputerChoice();
        playRound("rock", computerChoice)
    }

    rock.addEventListener('click', rockHandle)

      function paperHandle() {
        let computerChoice = getComputerChoice();
        playRound("paper", computerChoice)
    }

    paper.addEventListener('click', paperHandle)

      function scissorsHandle() {
        let computerChoice = getComputerChoice();
        playRound("scissors", computerChoice)
    }

    scissors.addEventListener('click', scissorsHandle)


    function playAgain() {
    playGame();
}

replay.addEventListener('click', playAgain)

}

playGame();

