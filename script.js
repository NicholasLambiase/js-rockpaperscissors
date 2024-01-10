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

    console.log(playerSelection + '\n');

    let inputComparisionMssg = `${playerSelection} vs ${computerSelection}\n`;
    let winMessage = 'You Win! Congrats!!!\n';
    let tieMessage = 'Oh man, that was a close one... It\'s a tie\n';
    let loseMessage = 'You lose :(\n';

    
    //validate user input
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        //now implement game logic
    
        //Immediatly return if there is a tie
        if (playerSelection === computerSelection) {
            return inputComparisionMssg + tieMessage;
        }
        
        if (playerSelection === 'rock') {
            if (computerSelection === 'paper')
                return inputComparisionMssg + loseMessage;
            else
                return inputComparisionMssg + winMessage;
        }
        else if (playerSelection === 'paper') {
            if (computerSelection === 'scissors')
                return inputComparisionMssg + loseMessage;
            else
                return inputComparisionMssg + winMessage;
        }
        else if (playerSelection === 'scissors'){
            if (computerSelection === 'rock')
                return inputComparisionMssg + loseMessage;
            else
                return inputComparisionMssg + winMessage;
        }
    }
    else {
        return 'Please select Rock, Paper, or Scissors\n';
    }
}