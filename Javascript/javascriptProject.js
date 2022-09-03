function computerPlay(){
    let grab = ["Rock", "Paper", "Scissors"];
    return grab[Math.floor(Math.random() * grab.length)];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    switch (true) {
       case (playerSelection === computerSelection):
            console.log(`Both same: ${playerSelection} = ${computerSelection}`);
             return "Equal";
           break;
       case (playerSelection === "paper" && computerSelection === "rock"):
             console.log(`You Wine! ${playerSelection} beats ${computerSelection}`);
           return   "You Wine!";
           break;
       case (playerSelection === "rock" && computerSelection === "paper"):
           console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
           return   "You Lose!";
           break;
       case (playerSelection === "rock" && computerSelection === "scissors"):
           console.log(`You Wine! ${playerSelection} beats ${computerSelection}`);
               return  "You Wine!";
               break;
       case (playerSelection === "scissors" && computerSelection === "rock"):
             console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
               return  "You Lose!";
               break;
       case (playerSelection === "scissors" && computerSelection === "paper"):
           console.log(`You Wine! ${playerSelection} beats ${computerSelection}`);
               return  "You Wine!";
               break;
       case (playerSelection === "paper" && computerSelection === "scissors"):
             console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
               return "You Lose!";
               break;
       default:
              return "Something goes wrong";
               break;
       
    }
}

function game(){

    let playerScore = 0;
    let computerScore = 0;
    let round = 0;
    let sameResult = 0;
    
    for(let i = 0; i < 5; i++){
              let playerSelection = "";
              let counter  = false;
           do {
                playerSelection = prompt("😉 lets play pick up : Rock, Paper, Scissors");

                    if(playerSelection === "rock"){
                        counter = true;
                    }else if(playerSelection === "paper"){
                        counter = true;
                    }else if(playerSelection === "scissors"){
                        counter = true;
                    }

                    if(counter == false){
                        alert(`your input is not valid =  ${playerSelection} : please choose between Rock, Paper, Scissors`);
                    }
                
             }while(counter == false);
             
            let computerSelection = computerPlay();
            let playRounds = playRound(playerSelection,computerSelection);
            
            if(playRounds === "You Wine!"){
                playerScore++;
            }else if(playRounds === "You Lose!"){
                computerScore++;
            }else if (playRounds === "Equal"){
                sameResult++;
            }

            round++;
        } 
            console.log("###########################################");
            console.log("Your Score: " + playerScore);
            console.log("Computer Score: " + computerScore);
            console.log("Both Same Score: " + sameResult);
            console.log("Game Rounds: " + round);
            console.log("###########################################");

            if(playerScore > computerScore){
                console.log("Congratulations: You are the winer 😉");
            }else if(computerScore > playerScore){
                console.log("Better luck next time : You lose the game 😌");
            }else if(sameResult){
                console.log("Both have same result! 😇");
            }
} 
game();