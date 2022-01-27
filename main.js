const playSet = ['rock', 'paper', 'scissors'];

function game(rounds) {
    let playerWins = 0;
    let computerWins = 0;

    for (let round = 1; round <= rounds; round++) {
        function playRound() {
            const computerSelection = (function() { return playSet[Math.floor(Math.random()*playSet.length)]; })();
            const playerSelection = (function playerPlay(promptText = 'Your move: ') {
                let playerChoice = prompt(`Round ${round}! ${promptText}`).toLowerCase();
                if (!playSet.includes(playerChoice)) {
                    playerChoice = playerPlay('Try again: ');
                }
                return playerChoice;
            })();
            console.log(`Round ${round}!`);
            let result = checkWinner();
            displayResult();

            function checkWinner() {
                let winner = '';
                if ( playerSelection === computerSelection ) {
                    winner = 'draw';
                } else if (
                    (playerSelection === 'rock' && computerSelection === 'scissors')
                    || (playerSelection === 'scissors' && computerSelection === 'paper')
                    || (playerSelection === 'paper' && computerSelection === 'rock')         ) { 
                    winner = 'player';
                    playerWins += 1;
                } else { 
                    winner = 'computer'; 
                    computerWins += 1;
                }
                return winner;
            }

            function displayResult() {
                if (result === 'draw') { console.log(`It's a draw - you both chose ${playerSelection}.`); }
                else if ( result === 'player' ) { console.log(`Player wins - ${playerSelection} beats ${computerSelection}.`); }
                else if ( result === 'computer' ) { console.log(`Computer wins - ${computerSelection} beats ${playerSelection}.`); }
            }
        }
        playRound(round);
    }
    if ( playerWins > computerWins) {
        console.log(`Player wins the series! ${playerWins} to ${computerWins}.`);
    } else if ( computerWins > playerWins ) {
        console.log(`Computer wins the series. ${computerWins} to ${playerWins}.`);
    } else {
        console.log(`DRAW with ${playerWins} apiece.`);
    }
}

game(3);

                
