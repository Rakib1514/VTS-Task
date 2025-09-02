// JavaScript has 2 main types.
// 1. Primitive data type
// 2. Reference / Non-primitive data type

// -------------------- Primitive data types --------------------
const name = "Rakib"; // String
const age = 26; // Number
const isStudent = true; // Boolean
const x = undefined; // Undefined
const y = null; // Null
const z = Symbol("id"); // Symbol
const bigNumber = 1234567890123456789012345678901234567890n; // BigInt

// -------------------- Reference / Non-primitive data types --------------------
const array = ["mango", "apple"]; // Array
const object = { name: "Rakib", age: 26 }; // Object
function greet() {
  return "Hello Rakib";
} // Function

// -------------------- Variable Declarations --------------------
// JavaScript has 3 ways to declare variables: var, let, const

// var → Function-scoped, can be redeclared and updated
var city = "Bogura";
city = "Dhaka"; // Update value
var city = "Chittagong"; // Redeclare

// let → Block-scoped, can be updated but not redeclared in the same scope
let country = "Bangladesh";
country = "India"; // Update value
// let country = "Nepal"; // ❌ Error: cannot redeclare

// const → Block-scoped, cannot be updated or redeclared
const pi = 3.14159;
// pi = 3.14; // ❌ Error: cannot reassign
// const pi = 3; // ❌ Error: cannot redeclare

console.log("City:", city);
console.log("Country:", country);
console.log("PI:", pi);