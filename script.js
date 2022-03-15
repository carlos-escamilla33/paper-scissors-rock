const GAMECHOICES = ["rock", "paper", "scissors"]
const playerChoicesData = document.querySelectorAll("[data-option]");
let computerScore = 0;
let playerScore = 0;

playerChoicesData.forEach((element => {
    element.addEventListener("click", handlePlayerClick);
}));

function computerPlay() {
    const randomIdx = Math.floor(Math.random() * GAMECHOICES.length);
    const computerResult = GAMECHOICES[randomIdx];
    return computerResult;
}

function handlePlayerClick(e) {
    e.preventDefault();
    const playerSelection = e.target.getAttribute("data-option");
    const computerSelection = computerPlay();
    console.log(`player: ${playerSelection}`, `computer: ${computerSelection}`)

    const roundResult = playRound(playerSelection, computerSelection)

   checkRoundWinner(roundResult);

   checkGameWinner(playerScore, computerScore);

    console.log(`Player: ${playerScore} vs Computer: ${computerScore}`);
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
    } else {
        return "It's a tie!";
    }

}

function checkRoundWinner(roundResult) {
    if (roundResult.includes("Lose")) {
        computerScore += 1;
    } else if (roundResult.includes("Win")) {
        playerScore++;
    }
}

// function game(roundResult) {
//     let playerScore = 0;
//     let computerScore = 0;

//     const roundResult = playRound()

//     if (roundResult.includes("Lose")) {
//         computerScore += 1;
//     } else if (roundResult.includes("Win")) {
//         playerScore++;
//     }

//     console.log(`Player: ${playerScore} vs Computer: ${computerScore}`);
// }

// game();