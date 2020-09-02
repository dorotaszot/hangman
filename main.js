const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const popup = document.getElementById('popup-container');
const playAgainBtn = document.getElementById('play-again');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part')

const words = ['programming', 'application', 'interface', 'wizard', 'developer', 'function'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

let correctLetters = [];
let wrongLetters = [];

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
  // console.log('update wrong letters')
  // Display wrong letters
  wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
  `;

  // Display parts
  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;

    if (index < errors) {
      part.style.display = 'block';
    } else {
      part.style.display = 'none';
    }

    // Display popup if lost
    if (errors === figureParts.length) {
      popup.style.display = 'flex';
      finalMessage.innerText = 'Unfortunatelly, you lost'
    }
  });

  // const errors = wrongLetters.length;

  // if (figureParts.length < errors) {
  //   figureParts.forEach((part) => {
  //     part.style.display = 'block';
  //   })
  // }

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

// Event litener for play again button
playAgainBtn.addEventListener('click', () => {
  // Clear arrays with letters
  correctLetters = [];
  wrongLetters = [];

  selectedWord = words[Math.floor(Math.random() * words.length)];

  displayWord();
  updateWrongLettersEl()
  popup.style.display = 'none';
});

displayWord();
