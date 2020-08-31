const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const popup = document.getElementById('popup-container');
const playAgainBtn = document.getElementById('play-again');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part')

const words = ['programming', 'application', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = ['r', 'p'];
const wrongLetters = [];

function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord
      .split('')
      .map(letter => `<span class="letter">
        ${correctLetters.includes(letter) ? letter : ''}
      </span>`).join('')}
  `
};

displayWord();