'use strict';

//RANDOM NUMBER
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//SCORE UPDATE
let score = 20;

//INITAL  VAULE
let initial = document.querySelector('.message').innerHTML;

//GUESS BOX
let guess = document.querySelector('.guess').value;

//number box
const mainNumber = document.querySelector('.number').innerHTML;

//High score box
let highScore = 0;

//DISPLAY MESSAGE
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//THE BUTTON SECTION
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //WHEN THERE IS NO INPUT
  if (!guess) {
    displayMessage('No Number! 😭');

    //WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    displayMessage('Corrrect Number! 🥳');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High! 😑' : 'Too Low! 😡');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You have Lost guyy! 🙁 ');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//THE AGAIN BUTTON SECTION
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  const newGuess = Math.trunc(Math.random() * 20) + 1;
  secretNumber = newGuess;
  document.querySelector('.score').innerHTML = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing 🤭....');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').innerHTML = '?';
});
