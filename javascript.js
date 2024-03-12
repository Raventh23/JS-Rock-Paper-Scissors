function getComputerChoice(){
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice == 0){
        return "Rock";
    } else if (randomChoice == 1){
        return "Paper";
    } else if (randomChoice == 2){
        return "Scissors";
    }

    return getComputerChoice ;
}
console.log(getComputerChoice());