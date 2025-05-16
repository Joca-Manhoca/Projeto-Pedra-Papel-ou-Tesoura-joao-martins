let humanScore = 0;
let computerScore = 0;

console.log("rock, paper, scissors game!");

function getComputerChoice(){
    let choice = Math.random() ;
    if(choice <= 0.33){
        return "rock";
    } else if (choice <= 0.66){
        return "paper";
    } else if (choice > 0.66 ){
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("write what you want to use between 1 for rock or 2 for paper or 3 for scissors");
    console.log("you choose", choice);
    return choice;
}

function  playRound(humanChoice, computerChoice){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if (humanChoice == 3 && computerChoice == "rock") {
        computerScore = computerScore + 1;
        console.log ("you lose the score is you", humanChoice, "- computer", computerChoice);
        return "you lose the score is you", humanChoice, "- computer", computerChoice;
    } else if (humanChoice == 1 && computerChoice == "paper") {
        computerScore = computerScore + 1;
        console.log ("you lose the score is you", humanChoice, "- computer", computerChoice);
        return "you lose the score is you", humanChoice, "- computer", computerChoice;
    } else if (humanChoice == 2 && computerChoice == "scissors") {
        computerScore = computerScore + 1;
        console.log ("you lose the score is you", humanChoice, "- computer", computerChoice);
        return "you lose the score is you", humanChoice, "- computer", computerChoice;
    } else if (humanChoice == 2 && computerChoice == "rock"){
        humanScore = humanChoice + 1;
        console.log("you win the score is you", humanChoice, "- computer", computerChoice);
        return "you win the score is you", humanChoice, "- computer", computerChoice;
    } else if (humanChoice == 3 && computerChoice == "paper"){
        humanScore = humanChoice + 1;
        console.log("you win the score is you", humanChoice, "- computer", computerChoice);
        return "you win the score is you", humanChoice, "- computer", computerChoice;
    } else if (humanChoice == 1 && computerChoice == "scissors"){
        humanScore = humanChoice + 1;
        console.log("you win the score is you", humanChoice, "- computer", computerChoice);
        return "you win the score is you", humanChoice, "- computer", computerChoice;
    } else if (humanChoice == 3 && computerChoice == "scissors" || humanChoice == 2 && computerChoice == "paper" || humanChoice == 1 && computerChoice == "rock"){
        console.log("you drawn the score is you", humanChoice, "- computer", computerChoice);
        return "you drawn the score is you", humanChoice, "- computer", computerChoice;
    }
}

function playGame(){
    for(let n = 0; n <= 5; n++){
        console.log(playRound());
    }
    if (humanScore > computerScore) {
        console.log("You win");
        return "You win";
    } else if (humanScore < computerScore){
        console.log("you lose");
        return "You lose";
    } else if (humanScore == computerScore){
        console.log("You got a drawn");
        return "You got a drawn";
    }
}
console.fog(playGame());