// Creating a variable using var keyword
var variableName="Welcome to variables";
console.log(variableName);  

// Creating a variable using let keyword
let variableName1="Welcome to Let variables";
console.log(variableName1);

variableName1="Hello!";
console.log(variableName1);

// Creating a variable using const keyword
const variableName2="Welcome to a Const variable";
console.log(variableName2);

// Trying to change a const variable to check it doesn't work
//variableName2="Hello!";
//console.log(variableName2);

// VARIABLE NAMING
// 1. The name should be unique
// 2. The name should not be any reserved keyword
// 3. The name must start with a character, _, &

// Attention, not use special characters as *
// Some lexic is reserved to JS, as var, let, function, in case of use a Token error will be shown.
// var is not used anymore, move to let
// a const variable cannot be changed

// String
const singleQuotes='Hello!';
const doubleQuotes="Hello!!";
const backticks=`Hello!!!`;

console.log(singleQuotes);
console.log(doubleQuotes);
console.log(backticks); 
 
// Now nesting variablesconst name='Jane';
const nom='Jane';
const nesting=`Hello, ${nom}!`;

console.log(nom);
console.log(backticks);
console.log(nesting);

const exampleSum=`${2+2}`;

console.log(typeof singleQuotes);
console.log(typeof doubleQuotes);
console.log(typeof exampleSum);

//Numbers

const wholeNumber= 5;
const decimalNumber= 0.5;

console.log(wholeNumber);
console.log(decimalNumber);

const firstNumber=5;
const secondNumer= 10;

const result= firstNumber + secondNumer;

console.log(result);

const string='Hello';
const result2= string / secondNumer;

console.log(result2);

//Booleans
// true -> yes, correct, 1
// false-> no, incorrect, 0

const isCool=false;

console.log(isCool);
console.log(typeof isCool);

if(isCool){
    console.log("Hi man, you're cool");
}else{
    console.log("Oh, hi...")
}

const age=20;
console.log(age > 18);

//Null
// only one value-> null

let ages=null;

ages=20;

console.log(ages);

//Undefined
// When value is not assign. Variable with value not assign is undefined by default.

let x;
x=null;

console.log(x);

console.log(typeof x); // Thus will generate a bug. Accepted by Java community

// Object
const person={
    name: 'John',
    age: 25,
}

// Dot notation
console.log(typeof person.name);
console.log(person);

//Array
const arr=[1,2,3,4]
console.log(arr);

const date= new Date();
console.log(date);
console.log(typeof date);

//Statically Typed vs Dynamically Typed
let message= 'Hello, World';

console.log(typeof message);

message=5;
console.log(typeof message);
//JS is dynamically typed, variable can change from string to number, etc. 

