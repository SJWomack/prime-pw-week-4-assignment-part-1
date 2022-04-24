console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return name;
}
// Remember to call the function to test
console.log(` Hello ${helloName('Stephen')}`);

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;

}
console.log(`Adding 3 and 5: ${addNumbers(3, 5)}`);

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
  return firstNumber * secondNumber * thirdNumber;

}
console.log(`Multiplying 3, 5, and 100: ${multiplyThree(3, 5, 100)}`);

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  let length = array.length;
  if (length > 0) {
    return array[length - 1];
  }

  return 'undefined';


}
let test = [1, 2, 3, 4];
console.log(`The last item is: ${getLast(test)}`)


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for (let thing of array) {
    if (thing === value) {
      return true;
    }
  }
  return false;

}

console.log(find(2, test));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string.charAt(0)) {
    return true
  }
  return false
}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (let numbers of array) {
    sum += numbers;
  }
  return sum;
}
console.log(sumAll([5, 6, 8, 9]));


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//   return an empty array. Note: The input array should not change.

function positiveNumbers(array) {
  let newArray = [];
  for (let positiveInt of array) {
    if (positiveInt >= 0) {
      newArray.push(positiveInt);
    }
  }
  return newArray;
}
//tests
console.log(test)
console.log(positiveNumbers([-1, -2, -3]))
console.log(positiveNumbers([-50, 100, 200, -5]))
// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
//Create a function that will reverse a string.
function solution(str){
  let testString = '';
  for (let i=str.length - 1; i>= 0; i--){
    testString += str[i];
  }
  return testString;
}

console.log(solution('gabagool'))
