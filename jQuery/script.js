// $(selector).action()

let isDarkMode = false;

// Wait for page to load (only needed if script is in <head>)
$(document).ready(function () {
  // Toggle dark mode on button click
  $("#btn-modal").click(function () {
    isDarkMode = !isDarkMode; // switch state

    // Change background and button text
    $("body").css("background-color", isDarkMode ? "black" : "white");
    $("#btn-modal").text(isDarkMode ? "Light Mode" : "Dark Mode");
  });
});

// Select all <p> inside .secret__msg__container
const pInsideSecretMsgContainer = $(".secret__msg__container p");

// Select all <p> and <span>
const allPAndSpan = $("p, span");
console.log(allPAndSpan);

// Change color of the 4th element (index 3)
const secondPAndSpan = allPAndSpan.eq(3);
secondPAndSpan.css("color", "blue");
console.log(secondPAndSpan);

// Select all direct <p> children inside .names
const allNames = $(".names > p");
console.log(allNames);

// Style every even <p> inside .names
$(".names > p").each(function (idx) {
  if (idx % 2 === 0) {
    $(this).css({
      color: "skyblue",
      "font-weight": "bold",
      "text-decoration": "underline",
    });
  }
});

// Convert jQuery object to array
const allNamesArray = $(".names > p").toArray();
allNamesArray.forEach((p) => console.log(p));

// Toggle secret message on button click
$("#toggle-btn-sc").click(() => {
  const isHidden = $("#toggle-btn-sc").data("toggle-value");

  if (isHidden) {
    $(".secret-message").css("display", "block");
    $("#toggle-btn-sc").data("toggle-value", false).text("Hide");
  } else {
    $(".secret-message").css("display", "none");
    $("#toggle-btn-sc").data("toggle-value", true).text("Show");
  }
});

// Double click event with .dblclick() method
// When button is double clicked, generate a random color and change its background
$("#btn-dbl-click").dblclick(() => {
  let bgColor = "#" + Math.floor(Math.random() * (16**6)).toString(16);
  $("#btn-dbl-click").css("background-color", bgColor).text(bgColor);
});

// multiple event with .on() method
// When button is clicked, double clicked or mouse entered, change the text of <p> below it
$("#btn-on").on("click dblclick mouseenter", (e) => {
  const $msg = $("#message-on-event"); // store element for reuse

  if (e.type === "click") {
    $msg.text("clicked").fadeOut(200).fadeIn(200);
  } else if (e.type === "dblclick") {
    $msg.text("double clicked").fadeOut(400).fadeIn(400);
  } else if (e.type === "mouseenter") {
    $msg.text("mouse entered").fadeTo(300, 0.3).fadeTo(300, 1);
  }
});

$("#todo-list").on("click", "li", function () {
  alert("Clicked: " + $(this).text());
});

/*
  ### Show / Hide / Toggle**

Make your page interactive:

- `.hide()`, `.show()`, `.toggle()`
- `.fadeIn()`, `.fadeOut()`, `.fadeToggle()`
- `.slideUp()`, `.slideDown()`, `.slideToggle()`

Example challenge: **slide up and down** when a button is clicked.
 */

$("#myPara").hide();

$("#btn-toggle").click(() => {
  $("#myPara").slideToggle();
});

/*
$("#myPara").hide();          // instantly hide
$("#myPara").show();          // instantly show
$("#myPara").toggle();        // show/hide instantly
$("#myPara").fadeOut(1000);   // fade out over 1 second
$("#myPara").fadeIn(1000);    // fade in over 1 second
$("#myPara").fadeToggle(1000);// fade in/out toggle
$("#myPara").slideUp(500);    // slide up
$("#myPara").slideDown(500);  // slide down
$("#myPara").slideToggle(500); // slide up/down
 */


  $("form").submit(function (e) {
    e.preventDefault(); // prevent the default form submission

    // Get input values
    let name = $("#name").val();
    let email = $("#email").val();
    let password = $("#password").val();

    // Display the values dynamically
    $("#output").html(`
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Password:</strong> ${password}</p>
    `);

    // Clear the inputs
    $("#name, #email, #password").val("");
  });

