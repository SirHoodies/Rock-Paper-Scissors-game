const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultScreen = document.getElementById('result-screen');
const buttons = document.querySelectorAll('button');

const OPTION_ROCK = 3;
const OPTION_PAPER = 2;
const OPTION_SCISSORS = 1;

let wins = 0;
let losses = 0;
let draws = 0;

let selectedOption;

rockButton.addEventListener('click', () => {
  selectedOption = OPTION_ROCK;
  gameTimer();
});

paperButton.addEventListener('click', () => {
  selectedOption = OPTION_PAPER;
  gameTimer();
});

scissorsButton.addEventListener('click', () => {
  selectedOption = OPTION_SCISSORS;
  gameTimer();
});

function gameTimer(){
  resultScreen.classList.remove('win-color', 'lose-color');
  let countdown = 3;

  buttons.forEach(button => {
    button.disabled = true;
  });

  const timer = setInterval(function() {
    resultScreen.textContent = countdown;
    countdown--;
    if (countdown < 0) {
      clearInterval(timer);
      buttons.forEach(button => {
        button.disabled = false;
      });
      startGame();
    }
  }, 1000);
}


function startGame() {
  const botAnswer = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  if (selectedOption === botAnswer) {
    resultScreen.textContent = "It's a tie!";
    draws++;
  } else {
    const isWin = selectedOption === OPTION_ROCK && botAnswer === OPTION_SCISSORS || selectedOption === OPTION_PAPER && botAnswer === OPTION_ROCK || selectedOption === OPTION_SCISSORS && botAnswer === OPTION_PAPER;
    resultScreen.textContent = isWin ? 'You win!' : 'You lose!';
    if (isWin) {
      resultScreen.classList.add('win-color');
      wins++;
    } else {
      resultScreen.classList.add('lose-color');
      losses++;
    }
  }
  document.getElementById('wins').textContent = wins;
  document.getElementById('losses').textContent = losses;
  document.getElementById('draws').textContent = draws;
}
