const gameOptions = ["rock", "paper", "scissors"]

function computerPlay() {
    // declare a random index that spans from 0 to the length of the array
    const randomIdx = Math.floor(Math.random() * gameOptions.length);
    const computerResult = gameOptions[randomIdx];
    return computerResult;
}

function playerPlay() {
    const playerResult = prompt("Your turn!");

    // if (playerResult === "") return an error message to the user
    
    return playerResult;
}

function playRound(playerSelection, computerSelection) {
    // we want to make the selections both case insensitive
    // we can lowercase both
    const playerSelect = playerSelection.toLowerCase();
    const computerSelect = computerSelection.toLowerCase();

    if (playerSelect === "rock" && computerSelect === "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelect === "paper" && computerSelect === "rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelect === "scissors" && computerSelect === "paper") {
        return "You Win! Scissors beats Paper";
    } else if (playerSelect === "rock" && computerSelect === "paper") {
        return "You Lose! Paper beats Rock"
    } else if (playerSelect === "scissors" && computerSelect === "rock") {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelect === "paper" && computerSelect === "scissors") {
        return "You Lose! Scissors beats Paper";
    } else {
        return "It's a tie!";
    }

}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    // loop and run play round function every iteration
    for (let i = 0; i < 5; i++) {
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        const roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        if (roundResult.includes("Lose")) {
            computerScore+=1;
        } else if (roundResult.includes("Win")) {
            playerScore++;
        }
    }
    
    console.log(`Player: ${playerScore} vs Computer: ${computerScore}`);
}

// game();
