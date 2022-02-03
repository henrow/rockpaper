const playSet = ['rock', 'paper', 'scissors'];
const imgButtons = document.querySelectorAll('.imgButton');
const resetHeader = document.querySelector('.bannerBox');

imgButtons.forEach((button) => {
    button.addEventListener('click', playRound);
});
resetHeader.addEventListener('click', resetGame);

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
    round++; 
    displayResult();


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
    }
}
function resetGame() {
    computerWins = 0;
    playerWins = 0;
    round = 1;
    results.textContent = '';
    roundBox.textContent = 'Round 1';
    computerScore.textContent = computerWins;
    playerScore.textContent = playerWins;
}

