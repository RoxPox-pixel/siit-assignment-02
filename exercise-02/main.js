console.log("Part - repetitive and decisional control strucutres, logical operators");

let array = [];
let providedNumbers;

let i = 0;
while (i < 5) {
    providedNumbers = prompt("Input a number !");
    providedNumbers = Number(providedNumbers);
    array[i] = providedNumbers;
    i++;
    console.log(array);
}

maxVal = array[0];

for (i = 1; i < array.length; i++) {
    if (array[i] > maxVal && array[i] !== null) {
      maxVal = array[i]; 
    }
  }

  alert(`The maximum value is: `+ maxVal);
  console.log(maxVal);