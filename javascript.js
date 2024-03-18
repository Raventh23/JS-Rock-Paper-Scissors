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
        userScore++;
        return "You Win!";
    }else if ((playerSelection == "scissors") && (computerChoice == "paper")){
        computerScore++;
        return "You Lose!";
    }else if ((playerSelection == "paper") && (computerChoice == "rock")){
        userScore++;
        return "You Win!";
    } else if ((playerSelection == "scissors") && (computerChoice == "rock")){
        computerScore++;
        return "You Lose!";
    } else if ((playerSelection == "rock") && (computerChoice == "scissors")){
        userScore++;
        return "You Win!";
    } else if ((playerSelection == "paper") && (computerChoice == "scissors")){
        computerScore++;
        return "You Lose!";
    }
}
function playGame(){
    for(let step = 0; step < 5; step++){
        let userInput = prompt("enter your choice: ");
        let computerplay = getComputerChoice();
        userInput = playerSelection(userInput);
        let roundResult = playRound(userInput, computerplay);
        console.log(roundResult);
        if (roundResult == "You Lose!"){
            computerScore ++
        } else if(roundResult == "You Win"){
            userScore ++
        }
    }
    if (userScore > computerScore){
        console.log("congratulations! you won with", userScore, "the computer got", computerScore, "points")
    } else if(computerScore > userScore){
        console.log("you Lost! the computer won with", computerScore, "while you have", userScore)
    } else{
        console.log("you tied with the computer refresh if you want to play again")
    }
}
let userScore = 0, 
    computerScore = 0;
