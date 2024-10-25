let currentSlide = 0;
function moveSlide(direction) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;
  currentSlide += direction;
// Loop back if the slide index is out of bounds
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}
// Auto slide image
setInterval(() => {
  moveSlide(1);
}, 4000);
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
      moveSlide(1);  //  next slide
    } else if (event.key === 'ArrowLeft') {
      moveSlide(-1);  //  previous slide
    }
  });
