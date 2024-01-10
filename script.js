function getComputerChoice(){
    choiceNum = Math.floor(Math.random()*3);
    
    if(choiceNum === 0)
        choice = 'rock';
    else if(choiceNum === 1)
        choice = 'paper';
    else
        choice = 'scissors';
    
    return choice;
}

function playRound(playerSelection, computerSelection){
    //ensure playerselection is lowercase
    playerSelection = playerSelection.toLowerCase();

    let inputComparisionMssg = `${playerSelection} vs ${computerSelection}\n`;
    let winMessage = 'You Win! Congrats!!!\n';
    let tieMessage = 'Oh man, that was a close one... It\'s a tie\n';
    let loseMessage = 'You lose :(\n';

    
    //validate user input
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        //now implement game logic
        console.log(inputComparisionMssg);

        //Immediatly return if there is a tie
        if (playerSelection === computerSelection) {
            console.log(tieMessage);
            return 2;
        }

        if (playerSelection === 'rock') {
            if (computerSelection === 'paper') {
                console.log(loseMessage);
                return 0;
            }
            else {
                console.log(winMessage);
                return 1;
            }       
        }
        else if (playerSelection === 'paper') {
            if (computerSelection === 'scissors') {
                console.log(loseMessage);
                return 0;
            }
            else {
                console.log(winMessage);
                return 1;
            }       
        }
        else if (playerSelection === 'scissors') {
            if (computerSelection === 'rock') {
                console.log(loseMessage);
                return 0;
            }
            else {
                console.log(winMessage);
                return 1;
            }       
        }
    }
    else {
        return 'Please select Rock, Paper, or Scissors\n';
    }
}

function game() {
    let playerSelection
    let computerSelection
    let roundResult
    
    //Loops through 5 rounds of rock paper scissors
    for (let index = 0; index < 5; index++) {

        //Asks the user for an input until it is deemed valid
        do {
            playerSelection = prompt('Please select Rock, Paper, or Scissors');
        } while ((playerSelection.toLowerCase() != 'rock' | playerSelection.toLowerCase() != 'paper' | playerSelection.toLowerCase() != 'scissors'));

        computerSelection = getComputerChoice();

        roundResult = playRound(playerSelection, computerSelection);

        //Scoring logic...
        /*  0 = player loss
            1 = player win
            2 = tie
        */
    }

    //Final message logic

}
