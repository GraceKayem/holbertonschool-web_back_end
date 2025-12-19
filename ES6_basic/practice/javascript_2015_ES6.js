// ==============================
// 1. let (Block Scope)
// ==============================

// "let" allows you to declare a variable with block scope
let x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2 (block-scoped)
}
// Here x is still 10

// ==============================
// 2. const (Constant Variable)
// ==============================

// The const keyword allows you to declare a constant (a JavaScript variable with a constant value).
// Constants are similar to let variables, except that the value cannot be changed.
const x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
}
// Here x is 10

// ==============================
// 3. Arrow Functions
// ==============================

// Short syntax for writing functions
// No need for "function" keyword if using arrow function
// No own "this", not hoisted, not ideal for object methods

// Before Arrow: Function to compute the product of a and b
let myFunction = function(a, b) {return a * b}

// With Arrow
let myFunction = (a, b) => a * b;

// Note
// Arrow functions do not have their own this. They are not well suited for defining object methods. Arrow functions are not hoisted. They must be defined before they are used.
// You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:
// This will not work
let myFunction = (x, y) => { x * y } ;

// This will not work
let myFunction = (x, y) => return x * y ;

// Only this will work
let myFunction = (x, y) => { return x * y };

// ==============================
// 4. Object Destructuring
// ==============================

// Destructuring assignment makes it easy to assign array values and object properties to variables.
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Destructuring assignment
let { firstName, age } = person;

// Note:
// When destructuring an object, you must use the same name for the variables as the corresponding object keys (names).
// The order of the keys (names) does not matter.

// ==============================
// 5. Array Destructuring
// ==============================
// Destructuring assignment makes it easy to assign array values and object properties to variables. 

//Create an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

//Destructuring assignment
let [furit1, furit2] = fruits;


// ==============================
// 6. The Spread (...) Operator
// ==============================
// The ... operator spreads an array or iterable into individual elements.
// The ... operator can pass arguments to a function:

const numbers = [23, 55, 21, 87, 56];
let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);

//The ... operator can be used to join arrays:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Dec"];

const year = [...q1, ...q2, ...q3, ...q4];


// ==============================
// 7. The For/Of Loop
// ==============================
// The JavaScript for/of statement loops through the values of iterable objects.
// for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.
// The for/of loop has the following syntax:

for (variable of iterable) {
  // code block to be executed
}

//variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var. iterable - An object that has iterable properties.

//LOOPING OVER AN ARRAY
const cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
  text += x + + " ";
}

//LOOPING OVER A STRING
let language = "Javascript";
let text = "";

for (let x of language) {
  text += x + " ";
}


// ==============================
// 8. JavaScript Maps
// ==============================
//