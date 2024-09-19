// Auto Type
let typed = new Typed(".auto-typers", {
  strings: ["Your Soul"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});


// Gsap - Cursor
var cursor = document.querySelector("#cursor");
window.addEventListener("mousemove", function(event){
  gsap.to(cursor, {
    x: event.x,
    y: event.y,
    duration: 1,
    ease: "back.out",
  });
  console.log(event);
});

// AOS Animation
AOS.init({
  offset: 200,
});

// Dark Mode
$(document).ready(function () {
  $(".darkmoding").click(function () {
    $("body").toggleClass("darkModer");
  });
});

// Pre Loader
var loader = document.getElementById("pre-loader1");

    window.addEventListener("load", function () {
      loader.style.display = "none";
    });




