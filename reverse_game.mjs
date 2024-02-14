import readline from "readline";

//function to ask questions
const rl = readline.createInterface(process.stdin, process.stdout);
function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

let minNum = 1;
let maxNum = 100;
let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum; //allows only whole numbers from 1-100 to be assigned as a random number
let guessCount = 0; // to keep track of the attempts made on guessing

let guess = await ask("Guess a number between 1-100 ")

if(isNaN(guess)) { //checks if the input is actually a number
  console.log("Please enter a correct number")
}

if(guess < minNum || guess > maxNum) { //checks if the input is between 1-100
  console.log("Please enter a correct number")
}

if (guess > answer) { //checks if the answer is too high
  guessCount++
  console.log("Guess is too high! Try again!")
}

if (guess < answer) { //checks if the answer is too low
  guessCount++
  console.log("Guess is too low! Try again!")
}

if (guess == answer) { //checks if the answer is correct and shows attempts made when correctly guessed
  guessCount++
  console.log("You got it right in " + guessCount + " tries!")
  process.exit()
}

while (guess != answer) { //continues the game if the number was not guessed correctly
  let guess = await ask("Guess a number between 1-100 ")

if(isNaN(guess)) { 
    console.log("Please enter a correct number")
  }
  
  else if(guess < minNum || guess > maxNum) { 
    console.log("Please enter a correct number")
  }

  else if(isNaN(guess)) {
    console.log("Please enter a correct number")
}
  else if (guess > answer) {
    guessCount++
    console.log("Guess is too high! Try again!")
}

  else if (guess < answer) {
    guessCount++
    console.log("Guess is too low! Try again!")
}
  else if (guess == answer) {
    guessCount++
    console.log("You got it right in " + guessCount + " tries!")
    process.exit()
}
}
