export function initSlideshow(slides, container) {
  let slideIndex = 0;
  let intervalId = null;
  let pauseTimeout = null;

  function showSlide(n) {
    slides.forEach((slide, index) => {
      slide.style.display = (index === n) ? "block" : "none";
    });
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }

  function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  }

  function startAuto() {
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 3000);
  }

  function pauseAuto() {
    clearInterval(intervalId);
    clearTimeout(pauseTimeout);
    pauseTimeout = setTimeout(startAuto, 5000); // 5 Sekunden Pause nach Button-Klick
  }

  // Button-Elemente erstellen
  function createButton(text, onClick, className) {
    const btn = document.createElement("button");
    btn.innerText = text;
    btn.className = className;
    btn.type = "button";
    btn.style.position = "absolute";
    btn.style.top = "50%";
    btn.style.transform = "translateY(-50%)";
    btn.style.zIndex = "10";
    btn.style.background = "rgba(255,255,255,0.7)";
    btn.style.border = "none";
    btn.style.fontSize = "2rem";
    btn.style.cursor = "pointer";
    btn.style.padding = "0 12px";
    btn.addEventListener("click", () => {
      onClick();
      pauseAuto();
    });
    return btn;
  }

  if (slides.length > 0 && container) {
    // Container auf relative setzen, falls nicht gesetzt
    if (getComputedStyle(container).position === "static") {
      container.style.position = "relative";
    }

    showSlide(slideIndex);

    // Buttons erstellen und einfügen
    const prevBtn = createButton("‹", prevSlide, "slideshow-prev-btn");
    prevBtn.style.left = "10px";
    const nextBtn = createButton("›", nextSlide, "slideshow-next-btn");
    nextBtn.style.right = "10px";
    container.appendChild(prevBtn);
    container.appendChild(nextBtn);

    startAuto();
  }
}