$(document).ready (function() {

  $(".navHam").click(function(){

      $(".navHam").css({"display":"none"});
      $(".navHam2").css({"display":"block"});
      $(".mainMenu").css({"transform":"scaleY(1)","transition":"all 0.3s"});

});

$(".navHam2").click(function(){

        $(".navHam").css({"display":"block"});
        $(".navHam2").css({"display":"none"});
        $(".mainMenu").css({"transform":"scaleY(0)","transition":"all 0.3s"});

 });
});





// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.querySelector(".mainNav");
var mblstky = document.querySelector(".mainMenu");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    mblstky.classList.add("mblstky");
  } else {
    navbar.classList.remove("sticky");
    mblstky.classList.remove("mblstky");
  }
}
// text animate js
const instance = new Typewriter('#typewriter h4', {
      strings: ['Full Stack Web Developer .','Wordpress Developer .','Logo Designer .'],
      autoStart: true,
      loop: true,
    });

// barfiller js 
$(document).ready(function(){
  $('#sklBar1').barfiller({
    barColor: "#ff6315"
  });
  $('#sklBar2').barfiller({
    barColor: "#ff6315"
  });
  $('#sklBar3').barfiller({
    barColor: "#ff6315"
  });
  $('#sklBar4').barfiller({
    barColor: "#ff6315"
  });
  $('#sklBar5').barfiller({
    barColor: "#ff6315"
  });
  $('#sklBar6').barfiller({
    barColor: "#ff6315"
  });
});
