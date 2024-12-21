function getComputerChoice(){
    const number = Math.floor(Math.random() * 3);
    if(number == 0){
        return "Rock";
    }
    else if(number == 1){
        return "Paper";
    }
    else if(number == 2){
        return "Scissors";
    }
}

function getHumanChoice(){
    const number = prompt("Rock-Paper-Scissors!: Enter 0 for Rock, 1 for Paper, or 2 for Scissors.");
    if(number == 0){
        return "Rock";
    }
    else if(number == 1){
        return "Paper";
    }
    else if(number == 2){
        return "Scissors";
    }
}

function playRound(humanChoice, computerChoice){
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();

    // Rock Choice
    if(human === "rock" && computer === "rock"){
        return "Tie.";
    }
    else if(human === "rock" && computer === "paper"){
        return "Round Lost.";
    }
    else if(human === "rock" && computer === "scissors"){
        return "Round Won!";
    }

    // Paper Choice
    if(human === "paper" && computer === "paper"){
        return "Tie.";
    }
    else if(human === "paper" && computer === "scissors"){
        return "Round Lost.";
    }
    else if(human === "paper" && computer === "rock"){
        return "Round Won!";
    }

    // Scissors Choice 
    if(human === "scissors" && computer === "scissors"){
        return "Tie.";
    }
    else if(human === "scissors" && computer === "rock"){
        return "Round Lost.";
    }
    else if(human === "scissors" && computer === "paper"){
        return "Round Won!";
    }
}

function playGame(){
    for(i = 0; i < 5; i++){
        const one = getHumanChoice();
        const two = getComputerChoice();
        console.log(one + " vs " + two);

        const round = (playRound(one, two));
        console.log(round);

        if(round === "Round Lost."){
            computerScore++;
        }
        else if(round === "Round Won!"){
            humanScore++;
        }

        console.log("Scores {Player: " + humanScore + " Computer: " + computerScore + "}");
        console.log("");
    }
    if(humanScore > computerScore){
        console.log("You won the game :)");
    }
    else if(humanScore < computerScore){
        console.log("You lost... :(");
    }
    else if(humanScore == computerScore){
        console.log("It's a tie!!!");
    }
}

let humanScore = 0;
let computerScore = 0;
playGame();
