/***/

// composable/slideshow.js
export function initSlideshow(slidesSelector) {
  let slideIndex = 0;
  const slides = document.querySelectorAll(slidesSelector);

  function showSlide(n) {
    slides.forEach((slide, index) => {
      slide.style.display = (index === n) ? "block" : "none";
    });
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }

  // Start
  if (slides.length > 0) {
    showSlide(slideIndex);
    setInterval(nextSlide, 3000); // 3 Sekunden pro Slide
  }
}