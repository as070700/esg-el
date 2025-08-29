export function initSlideshow(slides) {
  let slideIndex = 0;

  function showSlide(n) {
    slides.forEach((slide, index) => {
      slide.style.display = (index === n) ? "block" : "none";
    });
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }

  if (slides.length > 0) {
    showSlide(slideIndex);
    setInterval(nextSlide, 3000);
  }
}