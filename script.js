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
            console.log(tieMessage + '\n');
            return -1;
        }

        if (playerSelection === 'rock') {
            if (computerSelection === 'paper') {
                console.log(loseMessage + '\n');
                return 0;
            }
            else {
                console.log(winMessage + '\n');
                return 1;
            }       
        }
        else if (playerSelection === 'paper') {
            if (computerSelection === 'scissors') {
                console.log(loseMessage + '\n');
                return 0;
            }
            else {
                console.log(winMessage + '\n');
                return 1;
            }       
        }
        else if (playerSelection === 'scissors') {
            if (computerSelection === 'rock') {
                console.log(loseMessage + '\n');
                return 0;
            }
            else {
                console.log(winMessage + '\n');
                return 1;
            }       
        }
    }
    else {
        return 'Please select Rock, Paper, or Scissors\n';
    }
}

function getUserInput() {
    let validInput = false;
    while (!validInput) {
        playerSelection = prompt('Please select Rock, Paper, or Scissors');
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection !== 'rock' | playerSelection !== 'paper' | playerSelection !== 'scissors') {
            validInput = true;
            return playerSelection;
        }
        else
            alert('Please enter a valid choice');
    }
}

function game() {
    let validInput
    let playerSelection
    let computerSelection
    let roundResult
    let playerTally = 0;
    let computerTally = 0;
    
    //Loops through 5 rounds of rock paper scissors
    for (let index = 0; index < 5; index++) {

        playerSelection = getUserInput();

        computerSelection = getComputerChoice();

        roundResult = playRound(playerSelection, computerSelection);

        //Scoring logic...
        /*  0 = player loss
            1 = player win
            -1 = tie
        */

        if (roundResult === 0)
            computerTally++;
        else if (roundResult === 1)
            playerTally++;
        else {
            //if there is a tie we need to replay the round
            index--;
        }

    }

    //Final message logic
    if (playerTally > computerTally)
        console.log('Congrats! You won against the Computer');
    else if (computerTally > playerTally)
        console.log('Uh oh... You lost to the Computer :(');
    else
        console.log('Wow! it was a tie! That\'s rare!');

}

//Main execution
game();
