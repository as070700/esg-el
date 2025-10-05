// initSlideshow: Initialisiert eine einfache Bild-Slideshow mit Prev/Next-Buttons und Auto-Play.
// - slides: Array/NodeList von DOM-Elementen für jede Folie
// - container: DOM-Element, in das ggf. Steuer-Buttons eingefügt werden
export function initSlideshow(slides, container) {
  // ...lokaler Zustand: aktueller Index und Timer-IDs
  let slideIndex = 0;
  let intervalId = null;
  let pauseTimeout = null;

  // Zeigt die Folie mit Index n und versteckt andere Folien
  function showSlide(n) {
    slides.forEach((slide, index) => {
      slide.style.display = (index === n) ? "block" : "none";
    });
  }

  // Wechselt zur nächsten Folie (mit Wrap-Around)
  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }

  // Wechselt zur vorherigen Folie (mit Wrap-Around)
  function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  }

  // Startet das automatische Durchlaufen der Slides (Intervall)
  function startAuto() {
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 3000);
  }

  // Pausiert automatisch und setzt eine kurze Verzögerung bevor Auto-Play wieder startet
  function pauseAuto() {
    clearInterval(intervalId);
    clearTimeout(pauseTimeout);
    pauseTimeout = setTimeout(startAuto, 5000); // 5 Sekunden Pause nach Button-Klick
  }

  // Button-Elemente erstellen (Prev/Next) mit einfachem Styling und Event-Handler
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
    // Klick führt Aktion aus und pausiert Auto-Play vorübergehend
    btn.addEventListener("click", () => {
      onClick();
      pauseAuto();
    });
    return btn;
  }

  // Initialisierung nur bei vorhandenen Slides und Container
  if (slides.length > 0 && container) {
    // Container auf relative setzen, falls nicht gesetzt
    if (getComputedStyle(container).position === "static") {
      container.style.position = "relative";
    }

    // Erste Folie anzeigen
    showSlide(slideIndex);

    // Buttons erstellen und in den Container einfügen
    const prevBtn = createButton("‹", prevSlide, "slideshow-prev-btn");
    prevBtn.style.left = "10px";
    const nextBtn = createButton("›", nextSlide, "slideshow-next-btn");
    nextBtn.style.right = "10px";
    container.appendChild(prevBtn);
    container.appendChild(nextBtn);

    // Auto-Play starten
    startAuto();
  }
}