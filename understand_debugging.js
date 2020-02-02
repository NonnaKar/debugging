// **********          Debugging: Use the JavaScript Console to Check the Value of a Variable


// The console.log() method, which "prints" the output of what's within its parentheses to the console, will likely be the most helpful debugging tool. 
// Placing it at strategic points in your code can show you the intermediate values of variables. 
// It's good practice to have an idea of what the output should be before looking at what it is. 
// Having check points to see the status of your calculations throughout your code will help narrow down where the problem is.

// Task:

let a = 5;
let b = 1;
a++;
console.log(a);

let sumAB = a + b;
console.log(sumAB);


// **********          Debugging: Understanding the Differences between the freeCodeCamp and Browser Console


// If you would like to see only your single output and not have to worry about running through the test cycles, you can use console.clear() and check the browsers console.

// Task:

let output = "Get this to log once in the browser console and twice in the freeCodeCamp console";
console.clear();
console.log(output);


// **********          Debugging: Use typeof to Check the Type of a Variable


// You can use typeof to check the data structure, or type, of a variable. 
// This is useful in debugging when working with multiple data types. 
// If you think you're adding two numbers, but one is actually a string, the results can be unexpected. 
// Type errors can lurk in calculations or function calls. 

// Example 1

console.log(typeof ""); // outputs "string"
console.log(typeof 0); // outputs "number"
console.log(typeof []); // outputs "object"
console.log(typeof {}); // outputs "object"

// JavaScript recognizes six primitive (immutable) data types: Boolean, Null, Undefined, Number, String, and Symbol (new with ES6) and one type for mutable items: Object. 
// Note that in JavaScript, arrays are technically a type of object.

// Task:

let seven = 7;
let three = "3";
console.log(seven + three);
console.log(typeof seven);
console.log(typeof three);


// **********          Debugging: Catch Misspelled Variable and Function Names


// Transposed, missing, or mis-capitalized characters in a variable or function name will have the browser looking for an object that doesn't exist - and complain in the form of a reference error. 
// JavaScript variable and function names are case-sensitive.

// Task:

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);


// **********          Debugging: Catch Unclosed Parentheses, Brackets, Braces and Quotes


// Another syntax error to be aware of is that all opening parentheses, brackets, curly braces, and quotes have a closing pair. 
// Forgetting a piece tends to happen when you're editing existing code and inserting items with one of the pair types. 
// Also, take care when nesting code blocks into others, such as adding a callback function as an argument to a method.

// Task:

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);


// **********          Debugging: Catch Mixed Usage of Single and Double Quotes


// JavaScript allows the use of both single (') and double (") quotes to declare a string.
// Having two choices is great when a string has contractions or another piece of text that's in quotes. 
// Just be careful that you don't close the string too early, which causes a syntax error.

// Of course, it is okay to use only one style of quotes. 
// You can escape the quotes inside the string by using the backslash (\) escape character.

// Task:

let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);


// **********          Debugging: Catch Use of Assignment Operator Instead of Equality Operator


// Branching programs, i.e. ones that do different things if certain conditions are met, rely on if, else if, and else statements in JavaScript. 
// The condition sometimes takes the form of testing whether a result is equal to a value.

// As covered in previous challenges, the assignment operator (=) in JavaScript assigns a value to a variable name. 
// And the == and === operators check for equality (the triple === tests for strict equality, meaning both value and type are the same).

// Test:

let x = 7;
let y = 9;
let result = "to come";

if(x === y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);


// **********          Debugging: Catch Missing Open and Closing Parenthesis After a Function Call


// When a function or method doesn't take any arguments, you may forget to include the (empty) opening and closing parentheses when calling it. 
// Often times the result of a function call is saved in a variable for other use in your code. 
// This error can be detected by logging variable values (or their types) to the console and seeing that one is set to a function reference, instead of the expected value the function returns.

// Example 1

function myFunction() {
    return "You rock!";
  }
  let varOne = myFunction; // set to equal a function
  let varTwo = myFunction(); // set to equal the string "You rock!"

//   Task:

function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
  }
  
  let resultOne = getNine();
  console.log(resultOne);

  
// **********          Debugging: Catch Arguments Passed in the Wrong Order When Calling a Function


// Continuing the discussion on calling functions, the next bug to watch out for is when a function's arguments are supplied in the incorrect order. 
// If the arguments are different types, such as a function expecting an array and an integer, this will likely throw a runtime error. 
// If the arguments are the same type (all integers, for example), then the logic of the code won't make sense. 
// Make sure to supply all required arguments, in the proper order to avoid these issues.

// Task:

function raiseToPower(b, e) {
    return Math.pow(b, e);
  }
  
  let base = 2;
  let exp = 3;
  let power = raiseToPower(base, exp);
  console.log(power);


// **********          Debugging: Catch Off By One Errors When Using Indexing


// Off by one errors (sometimes called OBOE) crop up when you're trying to target a specific index of a string or array (to slice or access a segment), or when looping over the indices of them. 
// JavaScript indexing starts at zero, not one, which means the last index is always one less than the length of the item. 
// If you try to access an index equal to the length, the program may throw an "index out of range" reference error or print undefined.

// When you use string or array methods that take index ranges as arguments, it helps to read the documentation and understand if they are inclusive (the item at the given index is part of what's returned) or not. 

// Task:

function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Fix the line below
    for (let i = 0; i < len; i++) {
    // Do not alter code below this line
      console.log(firstFive[i]);
    }
  }
  
  countToFive();
  

// **********          Debugging: Use Caution When Reinitializing Variables Inside a Loop


// Printing variable values with each cycle of your loop by using console.log() can uncover buggy behavior related to resetting, or failing to reset a variable.

function zeroArray(m, n) {
    let newArray = [];
    for (let i = 0; i < m; i++) {
      let row = []; /* <-----  row has been declared inside the outer loop. 
       Now a new row will be initialised during each iteration of the outer loop allowing 
       for the desired matrix. */
      for (let j = 0; j < n; j++) {
        row.push(0);
      }
      newArray.push(row);
    }
    return newArray;
  }
  let matrix = zeroArray(3, 2);
  console.log(matrix);


// **********          Debugging: Prevent Infinite Loops with a Valid Terminal Condition


// Loops are great tools when you need your program to run a code block a certain number of times or until a condition is met, but they need a terminal condition that ends the looping. 
// Infinite loops are likely to freeze or crash the browser, and cause general program execution mayhem, which no one wants.

// Task:

function myFunc() {
    for (let i = 0; i<= 4; i ++) {
      console.log("Still going!");
    }
  }
console.log(myFunc()); 
