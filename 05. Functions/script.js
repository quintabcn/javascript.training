// A BLOCK OF CODE => PERFORMS A TASK

// A FUNCTION DECLARATION (Defining a function)
function square(number){
    return number * number;
};

// A FUNCTION CALL (calling/executing a function)

const result=square(5);
console.log(result);

/* // Example:
// Function declaration
function name(params){
    // statements
    // have access to "this" keyword
};

// a function expression
const name=function(params){
    //statements
}

// An arrow function
const name = (params) => {
    // statements
} 

name();
*/

function sayHi(name){
    console.log(`Hi, ${name}`);
}

sayHi('Joe');
sayHi('Jane');

// Every function returns Undefined unless anything else is informed

function add(a,b){
    //return 'Returned';
    return a+b;
}
const sum= add(2,2);
console.log(sum);

function test(){
    return true;
    return false;
}
const bool= test();
console.log(bool);

// Arrow Function

const squarE = (number) => {
    return number * number;
}

const resulT=squarE(10);
console.log(resulT);  

const squarE1 = (number) => number * number;

const resulT1=squarE1(10);
console.log(resulT1);  