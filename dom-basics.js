// -------------------- DOM Basics in JavaScript --------------------
// The DOM (Document Object Model) represents HTML elements as objects in JS,
// allowing us to manipulate content, styles, attributes, and handle events.

// 1. Selecting elements
const heading = document.getElementById("myHeading"); // Select an element by its ID
const firstParagraph = document.querySelector("p"); // Select the first <p> element
const allParagraphs = document.querySelectorAll("p"); // Select all <p> elements
const buttons = document.getElementsByClassName("myBtn"); // Select elements by class
const specialDiv = document.querySelector(".special"); // Select first element with class "special"

// 2. Modifying content
// innerHTML → Can insert HTML content inside an element
heading.innerHTML = "<strong>Hello, DOM!</strong>"; 

// innerText → Inserts plain text (no HTML tags interpreted)
firstParagraph.innerText = "This is plain text, HTML tags won't work here.";

// textContent → Similar to innerText, faster for just text
allParagraphs[1].textContent = "Updated text using textContent.";

// 3. Changing styles and classes
heading.style.color = "blue"; // Change inline CSS style
heading.style.fontSize = "24px"; // Change font size

// Add, remove, toggle classes
specialDiv.classList.add("active"); // Add a class
specialDiv.classList.remove("active"); // Remove a class
specialDiv.classList.toggle("highlight"); // Toggle class on/off

// 4. Modifying attributes
heading.setAttribute("data-id", "123"); // Set a custom attribute
console.log(heading.getAttribute("data-id")); // Get the attribute value
heading.removeAttribute("data-id"); // Remove the attribute

// 5. Event handling
const button = document.querySelector("#myButton");

// Method Assigning a function directly to onclick
button.onclick = function () {
  // This function runs when the button is clicked
  alert("Button clicked!");
};

// Method Using addEventListener → more flexible, can attach multiple events
button.addEventListener("click", () => {
  // Change heading text when button is clicked
  heading.innerText = "You clicked the button!";
  // Toggle a class for visual effect
  heading.classList.toggle("clicked");
});


// Custom attribute selector
// <button id="toggle-btn" data-ql-theme-mode="light">Toggle Mode</button>

const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", () => {
  const current = toggleBtn.dataset.qlThemeMode; // after the data-* will be camelCase ql-theme-mode -> qlThemeMode
  toggleBtn.dataset.qlThemeMode = current === "light" ? "dark" : "light";
  toggleBtn.textContent = toggleBtn.dataset.mode === "light" ? "Light Mode" : "Dark Mode";
});


// Creating and inserting element
const newDiv = document.createElement("div"); // Create element
newDiv.textContent = "Hello, new div!";
document.body.appendChild(newDiv); // Add at the end of body
document.body.insertBefore(newDiv, heading); // Insert before another element

// Remove element
newDiv.remove();

// Replace element
const newHeading = document.createElement("h2");
newHeading.textContent = "New Heading";
heading.replaceWith(newHeading);

// form values
const input = document.querySelector("#name");
console.log(input.value); // Get input value
input.value = "Rakib";   // Set input value

// Delegated events (important for dynamic elements)