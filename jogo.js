let humanScore = 0;
let computerScore = 0;

console.log("rock, paper, scissors game!");

function getComputerChoice(){
    let choice = Math.random() ;
    if(choice <= 0.33){
        return "rock";
    } else if (choice <= 0.66){
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    let choose = prompt("write what you want to use between rock or paper or scissors");
    let choice = choose.toLowerCase;
    return choice;
}

function  playRound(humanChoice, computerChoice){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore = computerScore + 1;
        return "you lose the score is you", humanChoice, "- computer", computerChoice;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore = computerScore + 1;
        return "you lose the score is you", humanChoice, "- computer", computerChoice;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore = computerScore + 1;
        return "you lose the score is you", humanChoice, "- computer", computerChoice;
    } else if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore = humanChoice + 1;
        return "you win the score is you", humanChoice, "- computer", computerChoice;
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore = humanChoice + 1;
        return "you win the score is you", humanChoice, "- computer", computerChoice;
    } else if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore = humanChoice + 1;
        return "you win the score is you", humanChoice, "- computer", computerChoice;
    }
}

function playGame(){
    for(let n = 0; n <= 5; n++){
        console.log(playRound());
    }
    if (humanScore > computerScore) {
        return "You win";
    } else if (humanScore < computerScore){
        return "You lose";
    } else{
        return "You got a drawn"
    }
}
console.fog(playGame());