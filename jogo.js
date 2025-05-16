const botchoice = 0;
const humanchoice = 0;

console.log("Jogo de pedra, papel, tesoura!");

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
    let choice = prompt("Escreva qual vai usar entre a pedra, o papel e a tesoura");
    let mensage = "Escolheste ${choice}";
}
console.log(getHumanChoice());