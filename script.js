const gameOptions = ["rock", "paper", "scissors"]

function computerPlay() {
    // declare a random index that spans from 0 to the length of the array
    const randomIdx = Math.floor(Math.random() * gameOptions.length);
    const computerResult = gameOptions[randomIdx];
    return computerResult;
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
    }

}

const playerSelection = "rock";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
