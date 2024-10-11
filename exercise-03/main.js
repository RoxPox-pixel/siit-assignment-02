console.log("Part-03 Arrays, iterations, switch/if-elseif");

let userInput = prompt("How many values will you provide?"); // ask how many numbers
userInput = Number(userInput);

let array = []; //prepare an array to store the numbers

for (let i = 0; i < userInput; i++) {
  let givenValue = prompt(`Input number ` + (i + 1));
  givenValue = Number(givenValue);
  array[i] = givenValue; // put the provided number in the array
  console.log(array); // actually see the array is formed
}

for (var i = 0; i < array.length; i++) {
  // go though the array
  var leftOver = array[i] % 3; // divide each number in the array by 3 and
  leftOver = Number(leftOver);

  if (leftOver === 0) {
    leftOver0 = Number(leftOver + 1); // counts how many number divide by 3 flat
  } else if (leftOver === 1) {
    leftOver1 = Number(leftOver + 1); // counts how many numbers divided by 3 have the lefover 1
  } else if (leftOver === 2) {
    leftOver2 = Number(leftOver + 1); // counts how many numbers fivided by 3 have the leftover 2
  }
}

alert(leftOver0 +" numbers that you provided have the remainder of division by 3 equal to 0");
alert(leftOver1 +" numbers that you provided have the remainder of division by 3 equal to 1");
alert(leftOver2 +" numbers that you provided have the remainder of division by 3 equal to 2");
