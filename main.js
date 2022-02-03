const playSet = ['rock', 'paper', 'scissors'];
const imgButtons = document.querySelectorAll('.imgButton');
const resetHeader = document.querySelector('.bannerBox');
const winBox = document.querySelector('.winBox');
const buttonBox = document.querySelector('.buttonBox');
const winner = document.querySelector('#winner');

imgButtons.forEach((button) => {
    button.addEventListener('click', playRound);
});
resetHeader.addEventListener('click', resetGame);
winBox.addEventListener('click', resetGame);
let playerWins = 0;
let computerWins = 0;
let round = 1;

const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const roundBox = document.querySelector('#roundBox');
const results = document.querySelector('#results');

function playRound(event) {
    const computerSelection = computerPlay(); 
    const playerSelection = this.id; 
    const result = checkWinner();
    displayResult();
    round++; 


    function computerPlay () {
        return playSet[Math.floor(Math.random()*playSet.length)];
    }

    function checkWinner() {
        let winner = '';
        if ( playerSelection === computerSelection ) {
            winner = 'draw';
        } else if (
            (playerSelection === 'rock' 
                && computerSelection === 'scissors')
            || (playerSelection === 'scissors' 
                && computerSelection === 'paper')
            || (playerSelection === 'paper' 
                && computerSelection === 'rock')         ) { 
            winner = 'player';
            playerWins += 1;
        } else { 
            winner = 'computer'; 
            computerWins += 1;
        }
        return winner;
    }

    function displayResult() {
        computerScore.textContent = computerWins;
        playerScore.textContent = playerWins;
        roundBox.textContent = `Round ${round}`;
        if (result === 'draw') { 
            results.textContent = `It's a draw - you both chose ${playerSelection}.`; 
        } else if ( result === 'player' ) { 
            results.textContent = `Player wins - ${playerSelection} 
                    beats ${computerSelection}.`; 
        } else if ( result === 'computer' ) { 
            results.textContent = `Computer wins - ${computerSelection} 
                    beats ${playerSelection}.`; 
        }

        if (playerWins == 5 || computerWins == 5) {
            if (playerWins == 5) {
                winner.textContent = 'YOU WIN!';
            } else {
                winner.textContent = 'COMPUTER WINS!';
            }
            buttonBox.style.display = "none";
            winBox.style.display = "flex";
        }
    }
}
function resetGame() {
    computerWins = 0;
    playerWins = 0;
    round = 1;
    results.textContent = 'FIRST TO 5 WINS!';
    roundBox.textContent = '';
    computerScore.textContent = computerWins;
    playerScore.textContent = playerWins;
    winBox.style.display = "none";
    buttonBox.style.display = "flex";
}

