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
function helloName() {
  return 'Jo';
}
// Remember to call the function to test
console.log('Hello,',helloName());

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  let sum = firstNumber + secondNumber;
  return sum;
}
console.log('The sum of the two numbers is',addNumbers(4,5));

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber,secondNumber,thirdNumber ){
  let product =  firstNumber * secondNumber * thirdNumber;
  return product;
}
console.log('The product of these numbers are',multiplyThree(3,4,6));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number >= 0 ){
    return 'this number is positive', true;
  }
  else{
    return 'The number is not positive', false;
  }
}
console.log('is your number positive?', isPositive(-2));

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) ); // in the description for this shouldn't 0 also be positive just going from what it says?
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

let array = [4,6,7,4,9,10]; // sets up the arrays values and modified for testing
let last = array.length-1; // whats used to get the last item in the array

function getLast() {
  if (array.length>0)
    console.log(array[last]);
  else{
    console.log('undefined');
  }
}

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  //while check one by one
  let value=4;
  while(i>array.length){
    if (value==array[0]){
      console.log("4");
      i++;
    }
    else{
      i++;
    }

  }}


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


