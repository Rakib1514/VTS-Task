let isDarkMode = false;

// .ready used for waits until the page(document) is fully loaded. this must need when use cdn in head.
// $("#btn-modal") → selects your button by id="btn-modal". if class is used, use ".btn"
// event handling body css. 

$(document).ready(function () {
  $("#btn-modal").click(function () {
    isDarkMode = !isDarkMode;
    $("body").css("background-color", isDarkMode ? "black" : "white");
    $("#btn-modal").text(isDarkMode ? "Light Mode" : "Dark Mode");
  });
});
