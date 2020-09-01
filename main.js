const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const popup = document.getElementById('popup-container');
const playAgainBtn = document.getElementById('play-again');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part')

const words = ['programming', 'application', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = ['w', 'i', 'z', 'a', 'r', 'd'];
const wrongLetters = [];

// function displayWord() {
//   wordEl.innerHTML = `
//     ${selectedWord
//       .split('')
//       .map(letter => `<span class="letter">
//         ${correctLetters.includes(letter) ? letter : ''}
//       </span>`).join('')}
//   `
// };

// displayWord();


function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord
      .split('')
      .map(
        letter => `
        <span class='letter'>
          ${correctLetters.includes(letter) ? letter : ''}
        </span>
        `
      )
      .join('')}
  `;

  // Remove new line!
  const innerWord = wordEl.innerText.replace(/\n/g, '');
  console.log(wordEl.innerText, innerWord);

  // Popup message
  if (innerWord === selectedWord) {
    finalMessage.innerText = 'Congratulations! You won!';
    popup.style.display = 'flex';
  }

};

displayWord();

