const buttonNames = ["Rock", "Paper", "Scissors"];
const container = document.getElementById("container");

let humanScore = 0;
let computerScore = 0;

buttonNames.forEach(name => {
    const button = document.createElement("button");
    button.textContent = name;
    button.id = name.toLowerCase();
    
    button.addEventListener("click", () => {
        alert("You chose " + name + ".");

        const computerChoice = getComputerChoice();
        const roundResult = playRound(name, computerChoice);

        alert("Computer chose " + computerChoice + ".")

        updateScore(roundResult);
        displayResult(roundResult);
    });

    container.appendChild(button);
});

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

function updateScore(result){
    if(result === "Round Lost."){
        computerScore++;
    }
    else if(result === "Round Won!"){
        humanScore++;
    }
    document.querySelector(".score").textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
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

function displayResult(result){
    const resultDiv = document.getElementById("result");

    if (humanScore >= 5 || computerScore >= 5) {
        let finalResult = humanScore > computerScore ? "You won the game!" : "You lost the game.";
        resultDiv.textContent = finalResult;
        disableButtons();
    } 
    else {
        resultDiv.textContent = result;
    }
}

function disableButtons(){
    const buttons = document.querySelectorAll("#container button");
    buttons.forEach(button => button.disabled = true);
}

// function playGame(){
//     for(i = 0; i < 5; i++){
//         const one = getHumanChoice();
//         const two = getComputerChoice();
//         console.log(one + " vs " + two);

//         const round = (playRound(one, two));
//         console.log(round);

//         if(round === "Round Lost."){
//             computerScore++;
//         }
//         else if(round === "Round Won!"){
//             humanScore++;
//         }

//         console.log("Scores {Player: " + humanScore + " Computer: " + computerScore + "}");
//         console.log("");
//     }
//     if(humanScore > computerScore){
//         console.log("You won the game :)");
//     }
//     else if(humanScore < computerScore){
//         console.log("You lost... :(");
//     }
//     else if(humanScore == computerScore){
//         console.log("It's a tie!!!");
//     }
// }

// playGame();
