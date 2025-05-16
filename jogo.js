function getComputerChoice(){
    let n = Math.random();
    if(n==1){
        return "rock";
    } else if (n==2){
        return "paper";
    } else {
        return "scissors";
    }
}
console.log(getComputerChoice()); 
console.log(getComputerChoice());
console.log(getComputerChoice());
