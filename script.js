const GAMECHOICES = [
    {
        choice: "paper",
        beats: "rock",
    },
    {
        choice: "rock",
        beats: "scissors",
    },
    {
        choice: "scissors",
        beats: "paper",
    }
];
const playerBtns = document.querySelectorAll("button");
const playerScoreSpan = document.querySelector("[data-player-score]");
const computerScoreSpan = document.querySelector("[data-computer-score]");
const resultDiv = document.querySelector("#result");
const btnDiv = document.querySelector(".btn-container");
const resetBtn = document.createElement("button");

function handlePlayerClick(e) {
    const selectionName = e.target.dataset.option;
    const playerSelection = GAMECHOICES.find(option => option.choice === selectionName);
    playerPlay(playerSelection);
}

function computerPlay() {
    const randomIdx = Math.floor(Math.random() * GAMECHOICES.length);
    const computerChoice = GAMECHOICES[randomIdx];
    return computerChoice;
}

function playerPlay(selection) {
    const computerSelection = computerPlay();
    const youAreRoundWinner = isRoundWinner(selection, computerSelection);
    const computerRoundWinner = isRoundWinner(computerSelection, selection);

    appendPlayerChoices(selection, computerSelection);

    updateScores(youAreRoundWinner, computerRoundWinner);

}

function isRoundWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.choice;
}

function gameWinner(score, player) {
    const currentScore = parseInt(score);
    if (currentScore === 5) {
        resultDiv.innerHTML = `${player} is the winner!`;
        addResetBtn();
    }
}

function addResetBtn() {
    resetBtn.textContent = "Reset Game";
    resetBtn.classList.add("enabledResetBtn")
    btnDiv.appendChild(resetBtn);
}

function updateScores(youAreRoundWinner, computerRoundWinner) {
    playerScoreSpan.textContent = parseInt(playerScoreSpan.textContent);
    computerScoreSpan.textContent = parseInt(computerScoreSpan.textContent);
    if (youAreRoundWinner) {
        playerScoreSpan.textContent++;
    } else if (computerRoundWinner) {
        computerScoreSpan.textContent++;
    }

    gameWinner(computerScoreSpan.textContent, "Computer");
    gameWinner(playerScoreSpan.textContent, "You");
}

function capitalize(word) {
    return word.choice.toUpperCase();
}

function appendPlayerChoices(playerSelection, computerSelection) {
    const capPlayerSelection = capitalize(playerSelection);
    const capComputerSelection = capitalize(computerSelection);
    resultDiv.textContent = `${capPlayerSelection} vs ${capComputerSelection}`;
}

playerBtns.forEach((button => {
    button.addEventListener("click", handlePlayerClick);
}));

resetBtn.addEventListener("click", () => {
    resultDiv.textContent = "";
    playerScoreSpan.textContent = "0";
    computerScoreSpan.textContent = "0";
    resetBtn.classList.remove("enabledResetBtn");
    resetBtn.remove();
});

