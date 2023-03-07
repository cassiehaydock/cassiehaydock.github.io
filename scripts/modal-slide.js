document.addEventListener("DOMContentLoaded", function(){
///////////////// Slideshow Triggers ///////////////////////
// Select first slide
let slideIndex = 1;
showSlides(slideIndex);

// Select previous and next buttons
var next = document.getElementById("next");
var prev = document.getElementById("prev");

// Set action triggers
next.onclick = function() {
    slideIndex += 1;
    showSlides(slideIndex);
}

prev.onclick = function() {
    slideIndex -= 1;
    showSlides(slideIndex);
}

// Change
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

});
