import readline from "readline";

//function to ask questions
const rl = readline.createInterface(process.stdin, process.stdout);
function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

console.log("Please pick a number from 1-100")

let min = 1;
let max = 100;
function randomNumber(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function lower() {
  max = currentGuess - 1;
  return max;
}
function higher() {
  min = currentGuess + 1;
  return min;
}
let currentGuess = randomNumber(min,max)
let c = 0;

let userInput = await ask("Is it.. " + currentGuess + "? ")

if (userInput.includes("Y")) {
  console.log("Your number is " + currentGuess)
  c++
}
while (c != 1) { //tried to attempt to loop the questions
  let userInput2 = await ask("Is it higher (H) or lower(L)?")
    if (userInput2.includes("L")) {
      lower()
      let newMax = randomNumber(min,lower())
      let userInput = await ask("Is it " + newMax + "? ")
        if (userInput.includes("Y")) {
          console.log("Your number is " + newMax)
          process.exit()
        }
    }
      if (userInput2.includes("H")) {
      higher()
      let newMin = randomNumber(higher(), max)
      let userInput = await ask("Is it " + newMin + "?  ")
      if (userInput.includes("Y")) {
        console.log("Your number is " + newMin)
        process.exit()
      }
  }
}
//Was trying to loop the game and have the range of numbers be changed within my randomNumber function in order for the computer to guess the number in 7 tries but I could not figure it out.
//Also sometimes my higher and lower do not correctly guess the number in their respective functions such as guessing higher or lower after a number of attempts in a row.
//I am guessing there are some issues with inclusivity