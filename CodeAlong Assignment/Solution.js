// Letter Array
const letterArray = ["a", "b", "d", "z", "y", "f", "i", "k"];

// Number of attempts
const attempts = 3;

// Randomly pick a letter from the array
const targetLetter = letterArray[Math.floor(Math.random() * letterArray.length)];

// Variable to keep track of remaining attempts
let remainingAttempts = attempts;

// Function to check if the guessed letter is present in the array
function checkLetter(guess) {
  if (letterArray.includes(guess)) {
    return true;
  } else {
    return false;
  }
}

// Game loop
while (remainingAttempts > 0) {
  const userInput = prompt(`Attempt ${attempts - remainingAttempts + 1} of ${attempts}\n\nLetter Array: ${letterArray.join(", ")}\n\nEnter your guess:`);
  const guessedLetter = userInput.toLowerCase(); // Convert user input to lowercase for case-insensitive comparison

  if (checkLetter(guessedLetter)) {
    alert("Congratulations! You guessed the correct letter! You are the winner!");
    break;
  } else {
    remainingAttempts--;
    if (remainingAttempts > 0) {
      alert(`Oops! Your guess is incorrect. You have ${remainingAttempts} attempt(s) left.`);
    } else {
      alert(`Oops! Your guess is incorrect. You have used all your attempts. You are the loser. The correct letter was "${targetLetter}".`);
    }
  }
}
