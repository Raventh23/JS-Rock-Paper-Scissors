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
function playRound(playerSelection, computerChoice){ //checks who wins and outputs the result
    if (playerSelection == computerChoice){
        return "It's a tie!";
    } else if ((playerSelection == "rock") && (computerChoice == "paper")){
        return "You Win!";
    }else if ((playerSelection == "scissors") && (computerChoice == "paper")){
        return "You Lose!";
    }else if ((playerSelection == "paper") && (computerChoice == "rock")){
        return "you Win";
    } else if ((playerSelection == "scissors") && (computerChoice == "rock")){
        return "you Lose";
    } else if ((playerSelection == "rock") && (computerChoice == "scissors")){
        return "you win";
    } else if ((playerSelection == "paper") && (computerChoice == "scissors")){
        return "you lose";
    }
}
function playGame(){
    for(let step = 0; step < 5; step++){
        let userInput = prompt("enter your choice: ");
        
    }
}
let userScore = 0, 
    computerScore = 0;
