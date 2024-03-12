function getComputerChoice() { //gets the computers selection for the game
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice == 0) {
        return "rock";
    } else if (randomChoice == 1) {
        return "paper";
    } else if (randomChoice == 2) {
        return "scissors";
    }
    return getComputerChoice;
}
function playerSelection(userInput) { // takes the user input and makes it lowercase so it can be used for the game
    let playerSelection = userInput.toLowerCase();
    return playerSelection;
}

let userInput = prompt("enter your choice: ");