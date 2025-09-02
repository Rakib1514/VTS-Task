
// -------------------- Array in JavaScript --------------------
// Array: An ordered collection of items (indexed, zero-based).
// Array element can be of any data type
// Array is mutable
const fruits = ["mango", "apple", "banana", "orange"];

// Commonly used Array methods:
fruits.push("grape"); // Add item at the end
fruits.pop(); // Remove last item
fruits.unshift("kiwi"); // Add item at the start
fruits.shift(); // Remove first item
fruits.includes("apple"); // Check if an item exists -> true/false
fruits.indexOf("banana"); // Find index of item -> 2
fruits.slice(1, 3); // Copy a part of array -> ["apple", "banana"]. it does not modify the original array
fruits.splice(2, 1); // Remove item(s). optional: add new item -> removes "banana" . modifies the original array.
fruits.join(", "); // Join into string -> "mango, apple, orange"

// Iteration methods:
fruits.forEach((fruit) => console.log(fruit)); // forEach → perform an action on each element (no return value)
const upperFruits = fruits.map((fruit) => fruit.toUpperCase()); // map → transform each element → ["MANGO", "APPLE", ...]
const shortFruits = fruits.filter((fruit) => fruit.length <= 5); // filter → keep elements that match condition → ["apple", "grape"]
const foundFruit = fruits.find((fruit) => fruit === "apple"); // find → get the first matching element → "apple"

// -------------------- Object in JavaScript --------------------
// Object: A collection of key-value pairs
const person = {
  name: "Rakib",
  age: 26,
  isStudent: true,
};

// Access values
console.log(person.name); // Dot notation
console.log(person["age"]); // Bracket notation

// Modify object
person.city = "Bogura"; // Add new property
person.age = 27; // Update value
delete person.isStudent; // Delete property

// Object methods
Object.keys(person); // ["name", "age", "city"]
Object.values(person); // ["Rakib", 27, "Bogura"]
Object.entries(person); // [["name", "Rakib"], ["age", 27], ["city", "Bogura"]]

// Looping over object
for (const key in person) {
  console.log(key, person[key]);
}

// -------------------- Loops in JavaScript --------------------

// for loop
for (let i = 0; i < 5; i++) {
  console.log("for loop value:", i);
}

// while loop
let count = 0;
while (count < 5) {
  console.log("while loop value:", count);
  count++;
}

// do...while loop
// The do...while loop will always run at least once,
// because the condition is checked after the code block executes.
let num = 0;
do {
  console.log("do...while loop value:", num);
  num++;
} while (num < 5);

// for...of loop (for arrays, strings, etc.)

for (const fruit of array) {
  console.log("for...of value:", fruit);
}

// for...in loop (for objects)
for (const key in object) {
  console.log("for...in key:", key, "value:", object[key]);
}


// -------------------- If...Else in JavaScript --------------------
// if...else → Conditional statements to perform different actions based on conditions

const ageCheck = 18;

if (ageCheck >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// if...else if...else → Multiple conditions
const score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else if (score >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// Ternary operator → Shorter syntax for simple if...else
const canVote = ageCheck >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote);