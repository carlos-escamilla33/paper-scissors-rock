const gameOptions = ["rock", "paper", "scissors"]

function computerPlay() {
    // declare a random index that spans from 0 to the length of the array
    const randomIdx = Math.floor(Math.random() * gameOptions.length);
    const computerResult = gameOptions[randomIdx];
    return computerResult;
}

