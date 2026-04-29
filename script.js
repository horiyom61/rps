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

function getHumanChoice() {
    let answer = prompt("Choose between rock, paper or scissors").toLowerCase();
    return answer
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let draw = 0;

    function playRound(humanChoice, computerChoice) {
  
    if (computerChoice === "rock" && humanChoice === "rock") {
        console.log("It's a draw, nobody wins!")
        draw++;
    } else if (computerChoice === "paper" && humanChoice === "paper") {
        console.log("It's a draw, nobody wins!")
        draw++
    } else if (computerChoice === "scissors" && humanChoice === "scissors") {
        console.log("It's a draw, nobody wins!")
        draw++;
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("Human won, paper beats rock!")
        humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("Computer won, rock beats scissors!")
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("Computer won, paper beats rock!")
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        console.log("Human won, scissors beats paper!")
        humanScore++;
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        console.log("Human won, rock beats scissors!")
        humanScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("Computer won, scissors beats paper!")
    }
    }

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(humanScore);
console.log(computerScore);
console.log(draw);
}

playGame();
playGame();
playGame();
playGame();
playGame();

