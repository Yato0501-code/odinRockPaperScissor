let playerSelection = prompt("enter choice:");
//user will enter the choice of R/P/S

function computerPlay() {
    let array1 = ['rock', 'paper', 'scissors'];

    let randomElement = Math.floor(Math.random() * array1.length);

    return array1[randomElement];
}

let computerSelection = computerPlay();
console.log("the computer had",computerSelection);
firstRound(playerSelection, computerSelection);

function firstRound(playerSelection, computerSelection) {

    switch (playerSelection) {
        case 'rock': if (computerSelection == 'rock') {
                 console.log("its a tie");
            } 
                    else if (computerSelection == 'paper') {
                     console.log("you lose");
            }
                    else {
                     console.log("you win");
            }
            break;
        case 'paper': if(computerSelection == 'rock'){
                      console.log("you win");
            } 
                    else if ( computerSelection == 'paper'){
                      console.log("its a tie");
            } 
                    else {
                      console.log("you lose");
            }
            break;
        case 'scissors': if(computerSelection == 'rock'){
                          console.log("you lose");
            }
                          else if (computerSelection == 'paper'){
                           console.log("you win");
            } 
                         else {
                            console.log("it's a tie");
            }
            break;
        default : console.log("error, please try again later");
    }

}
