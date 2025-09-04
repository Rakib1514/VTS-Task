// AJAX = Asynchronous JavaScript And XML

let users = [];

// $.get(url, callback)
$.get("https://jsonplaceholder.typicode.com/users", function (data) {
  console.log("Post Title:", data);
  users = data;
});

// $.post(url, data, callback)
$.post(
  "https://jsonplaceholder.typicode.com/users",
  {
    title: "Rakib’s Post",
    body: "Learning jQuery AJAX 🚀",
    userId: 1,
  },
  function (data) {
    console.log("Server Response:", data);
  }
);

// $.ajax() → Most flexible

$.ajax({
  url: "https://jsonplaceholder.typicode.com/users",
  type: "GET", // or POST, PUT, DELETE
  success: function (data) {
    console.log("Success:", data);
  },
  error: function (xhr, status, error) {
    console.error("Error:", error);
  },
});

// directly load another page or file
// $("#result").load("../index.html");
$("#result").load("./about-me.txt");

$("#myForm").submit(function (e) {
  e.preventDefault();
  console.log("value with e.target", e.target.email.value);

  let name = $("#name").val();
  let email = $("#email").val();

  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    type: "POST",
    data: { name, email },
    success: function (data) {
      $("#response").html(`<p>✅ Submitted! ID: ${data.id}</p>`);
      // $("#name, #email").val(""); // clear the form or by select #myForm
      $("#myForm")[0].reset();
    },
    error: function () {
      $("#response").html("<p>❌ Something went wrong</p>");
      // or dynamic response error message
    },
  });
});

// Load Post Data to UI

$("#loadBtn").click(function () {
  $(".postList").html("<p>⏳ Fetching Data...</p>"); // Loading / fetching Indicator
  $.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
    function (data) {
      let result = data
        .map(
          (post) => `
      <div style="margin-bottom:10px; padding:10px; border:1px solid #ccc;">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      </div>
    `
        )
        .join("");

      $(".postList").html(result);
    }
  );
});

// Get or post req with error handling
//So .done() = success, .fail() = error, .always() = both.
$.get("https://jsonplaceholder.typicode.com/users")
  .done(function (data) {
    console.log("✅ Success:", data);
  })
  .fail(function (xhr, status, error) {
    console.error("❌ Error:", error);
  })
  .always(function () {
    console.log("Request finished (success or fail).");
  });

// send json data

$.ajax({
  url: "https://jsonplaceholder.typicode.com/posts",
  type: "POST",
  contentType: "application/json", // important
  data: JSON.stringify({ title: "Hello", body: "JSON data", userId: 1 }),
  success: function (data) {
    console.log("✅ Sent JSON:", data);
  },
});

// Handle multiple ajax req,

$.when(
  $.get("https://jsonplaceholder.typicode.com/users"),
  $.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
).done(function (users, posts) {
  console.log("Users:", users[0]); // first response data
  console.log("Posts:", posts[0]); // second response data
});
