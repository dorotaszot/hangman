const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const popup = document.getElementById('popup-container');
const playAgainBtn = document.getElementById('play-again');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part')

const words = ['programming', 'application', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
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

// Display Word
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

// Show notification
function showNotification() {
  // console.log('show notification')
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');

  }, 2000);
}

// Update wrong letters
function updateWrongLettersEl() {
  console.log('update wrong letters')
}

// Event listener for pressing a letter
window.addEventListener('keydown', e => {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;

    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);

        displayWord()
      } else {
        showNotification()
      }

    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);

        updateWrongLettersEl()
      } else {
        showNotification()
      }
    }

  }
})

displayWord();
