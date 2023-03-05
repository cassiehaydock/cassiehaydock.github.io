document.addEventListener("DOMContentLoaded", function(){

///////////////// Modal Triggers ///////////////////////
// Select modal
var mpopup = document.getElementById('modal-box');

// Select trigger link
var mpLink = document.getElementById("modal-button");

// Select close action element
var close = document.getElementById("close");

// Get the video
var vid = document.getElementById("vid");

// Open modal once the link is clicked
mpLink.onclick = function() {
    mpopup.style.display = "block";
};

// Close modal once close element is clicked
close.onclick = function() {
    vid.pause();
    mpopup.style.display = "none";
};

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
