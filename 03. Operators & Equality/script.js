// Comparison operators => true/false

const a= 5;
const b=10;

// Greater Than
console.log(a > b);
// Greater than or equal to
console.log(a >= b);
// Less than
console.log(a < b);
// Less than or equal to
console.log(a >= b);
// Is equal
console.log(a==b);
// Not equal
console.log(a!=b);

//Strict Equality
// Compares VALUES and DATA TYPES
// return true only if both are the same
console.log(a===b);
console.log(5===5);
console.log('hello'==='hello');
console.log(5==='5'); // this is false, since are different types

//Strict Inequality
console.log(a!==b);

//Loose Equality
// Doesn't compare datatypes
console.log(5=='5');

// The Good Ones: ===, !==
// The Evil Twins: ==, !=
// Example

console.log(""=="0");
console.log(0=="");
console.log(0=='0');

console.log(false=='false');
console.log(false=='0');

console.log(true==1);

//Logical Operators

// AND && => ALL OPERANDS ARE TRUE => TRUE
console.log(true && false);
console.log(true && true);
console.log(false && false);
console.log(true && false && true);
console.log(true&&true&&true);

// OR || => AT LEAST ONE OPERAND IS TRUE => TRUE
console.log(true || false || true);

// NOT !
console.log(!false);


