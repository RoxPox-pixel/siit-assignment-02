console.log("Part 1 - random number generation, switch / if-else-if control structures");


let maxNr = 10;

let firstNr = Math.floor(Math.random() * maxNr) + 1;
firstNr = Number(firstNr);

let secondNr = Math.floor(Math.random() * maxNr) + 1;
secondNr = Number(secondNr);


let operators = ['+', '-', '*'];
let randomIndex = Math.floor(Math.random() * operators.length);
let operation = operators[randomIndex];

let realResult;
switch (operation) {
  case '+':
    realResult = firstNr + secondNr;
    break;
  case '-':
    realResult = firstNr - secondNr;
    break;
  case '*':
    realResult = firstNr * secondNr;
    break;
}


let userResult = prompt(`${firstNr} ${operation} ${secondNr} = ?`);
userResult = Number(userResult) // de ce fara sa fac castingul asta daca mai jos in if am === nu imi valideaza corect ca e vorba de un nr?git branch -M main

if (userResult === realResult) {
  alert("Your answer is correct!");
} else {
  alert("Your answer is wrong! The correct value is " + realResult);
}