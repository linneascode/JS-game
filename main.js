
let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');
let lastGuess = null; // To keep track of the last guess

// Generate a random number between 1 and 100
let number = Math.floor(Math.random() * 100) + 1;
console.log(number);

// Sound effects
let correctSound = new Audio('Sounds/twinklesparkle.mp3');
let wrongSound = new Audio('Sounds/blaster.mp3');

let userInput = document.getElementById('userinput');

userInput.focus();

userInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent the default action of the Enter key
    btn.click(); // Trigger the click event on the button
  }
});

btn.addEventListener('click', function() {
  let input = userInput.value;
  
  if (input == lastGuess) {
    output.innerHTML = `You already guessed ${input}! Try a different number.`;
  } else {
    lastGuess = input;
    if (input == number) {
      output.innerHTML = `You guessed right, your number was ${number}`;
      correctSound.play(); // Play correct guess sound
      document.getElementById('container').classList.add('shake'); // Add shake class
      setTimeout(() => {
        document.getElementById('container').classList.remove('shake'); // Remove shake class after 0.5 seconds
      }, 500);
      } else if (input < number) {
        output.innerHTML = "You guessed too low. Try again!";
        wrongSound.play(); // Play wrong guess sound
        
      } else {
        output.innerHTML = "You guessed too high! Try again!";
        wrongSound.play(); // Play wrong guess sound
        document.getElementById('container').classList.add('shake-small'); // Add small shake class
        setTimeout(() => {
          document.getElementById('container').classList.remove('shake-small'); // Remove small shake class after 0.1 seconds
        }, 100);
      }
  }
  userInput.value = "";
});



