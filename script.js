
const selectionButtons = document.querySelectorAll(".selection-btn");
selectionButtons.forEach((button) => {
    button.addEventListener("click", function (e){
        let playerSelection = button.id;
        game(playerSelection);
    });
});

function game(playerSelection) {
    let computerSelection
    let roundResult

    computerSelection = getComputerChoice();
    roundResult = playRound(playerSelection, computerSelection);

    let inputComparisionMssg = `${playerSelection} vs ${computerSelection}\n`;
    let winMessage = 'You Win! Congrats!!!\n';
    let tieMessage = 'Oh man, that was a close one... It\'s a tie\n';
    let loseMessage = 'You lose :(\n';

    let result_span = document.querySelector("#game-result-span");
    
    let result_text = document.createElement("p");
    result_text.id = "result-text";

    let input_comparison = document.createElement("h3");
    input_comparison.id = "comp-text";
    input_comparison.textContent = inputComparisionMssg;

    if (document.querySelector("#comp-text"))
        document.querySelector("#comp-text").remove();

    if (document.querySelector("#result-text"))
        document.querySelector("#result-text").remove();

    //Final message logic
    if (roundResult == 1)
        result_text.textContent = winMessage;
    else if (roundResult == 0)
        result_text.textContent = loseMessage;
    else
        result_text.textContent = tieMessage;

        result_span.appendChild(input_comparison);
        result_span.appendChild(result_text);
}

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
    
    // Show the user the compared inputs
    console.log(inputComparisionMssg);

    //Immediatly return if there is a tie
    if (playerSelection === computerSelection) {
        console.log(tieMessage + '\n');
        return -1;
    }

    // Determine the result based on the player and computer choices
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