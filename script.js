const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorBtn = document.querySelector('.scissor');
const playerOptions = [rockBtn, paperBtn, scissorBtn];
const computerOptions = ['rock', 'paper', 'scissor'];
const Result = document.getElementById('result');
const FinalResult = document.getElementById('finalResult');
const replayBtn = document.querySelector('.Replay');


let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function play(playerChoice) {
    const randomIndex = Math.floor(Math.random() * computerOptions.length);
    const computerChoice = computerOptions[randomIndex];
    console.log(computerChoice)
    if (playerChoice === computerChoice) {
        Result.innerHTML = "tie!";
    } else if ((playerChoice === "rock" && computerChoice === "scissor") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissor" && computerChoice === "paper")) {
        playerScore++;
        Result.innerHTML = "You win!";
    }

    else {
        computerScore++;
        Result.innerHTML = "Computer wins!";
    }

    roundsPlayed++;
    document.getElementById('userScore').textContent = `${playerScore}`;
    document.getElementById('computerScore').textContent = ` ${computerScore}`;

    if (roundsPlayed === 5) {
        playerOptions.forEach((option) => {
            option.disabled = true;
        });

        setTimeout(finalResult, 1000);
    }

}

function finalResult() {
    Result.innerHTML = "";
    if (playerScore > computerScore) {
        FinalResult.innerHTML = "Congratulations! You won the game!";
        document.body.style.backgroundColor = '#e8f5e9';
        FinalResult.style.color = "green";
    }
    else if (playerScore < computerScore) {
        FinalResult.innerHTML = "Sorry! Computer won the game!";
        document.body.style.backgroundColor = '#ffebee';
        FinalResult.style.color = "red";
    }
    else {
        FinalResult.innerHTML = "It's a tie!";
        FinalResult.style.color = "gray";
    }

    replayBtn.style.display = 'inline-block';
}

playerOptions.forEach((option, index) => {
    option.addEventListener('click', () => {
        play(computerOptions[index]);
    });
});

replayBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    document.getElementById('userScore').textContent = '0';
    document.getElementById('computerScore').textContent = '0';
    document.body.style.backgroundColor = '';
    playerOptions.forEach((option) => {
        option.disabled = false;
    });
    Result.innerHTML = "";
    FinalResult.innerHTML = "";
    replayBtn.style.display = 'none';
});





