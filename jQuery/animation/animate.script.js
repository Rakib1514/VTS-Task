$("#btnMove").click(() => {
  const $box = $("#box");

  const currentPosition = parseInt($box.css("left")) || 0;

  if (currentPosition === 0) {
    $box.animate({ left: "500px" }, 1000);
  } else {
    $box.animate({ left: "0px" }, 1000);
  }
});

// or we can use the data
/*
  const pos = $box.data("position") || "left";  
  $box.animate({ left: pos === "left" ? "300px" : "0px" }, 1000);
  $box.data("position", pos === "left" ? "right" : "left");
*/

$("#btnMove")
  .mouseenter(function() {
    // On mouse enter, increase size and change background
    $(this).animate({
      width: "150px",
      height: "60px",
      fontSize: "20px"
    }, 300).css("background-color", "orange");
  })
  .mouseleave(function() {
    // On mouse leave, revert size and color
    $(this).animate({
      width: "120px",
      height: "40px",
      fontSize: "16px"
    }, 300).css("background-color", "#007BFF");
  })
  .click(function() {
    // On click, move the button horizontally
    const $btn = $(this);
    const currentLeft = parseInt($btn.css("left")) || 0;

    $btn.css("position", "relative"); // ensure position is relative or absolute

    $btn.animate({
      left: currentLeft === 0 ? "200px" : "0px"
    }, 500);
  });


  $(document).ready(function() {
  // Select all <p> inside .content__container
  $(".content__container p").each(function(index) {
    
    // Animate each p with a delay based on index
    $(this).delay(200 * index).animate({
      left: "0px",
      opacity: 1
    }, 1000);
  });
});


// animate key frame
// for this: first width will be 200px in 500milisec, then left will be 200px in 500milisec

$("#btnAnimate").click(function() {
  $("#box")
    // Step 1: Increase width from 100px → 200px
    .animate({ width: "200px" }, 500)
    // Step 2: Move the box to left 200px
    .animate({ left: "200px" }, 500);
});