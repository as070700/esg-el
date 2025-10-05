<template>
  <!-- Slideshow-Container: umschließt alle Slide-Elemente -->
  <div class="slideshow-container" ref="container">
    <!-- Jede Slide enthält ein Bild; v-for erzeugt die Folien -->
    <div v-for="(image, index) in images" 
         :key="index" 
         class="slide"
         ref="slideEls"
         style="display: none;"> <!-- Start verborgen, wird von JS sichtbar geschaltet -->
      <!-- Bild: src und alt aus dem images-Array -->
      <img :src="image.src" :alt="image.alt" class="slideshow-img" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue'
import { initSlideshow } from '@/composables/slideshow.js'

// Refs:
// - slideEls: Referenzen auf die einzelnen Slide-Elemente (DOM-Elemente)
// - container: Wrapper-Element für die Slideshow (z.B. für Navigation/Größenberechnung)
const slideEls = ref([])
const container = ref(null)

// Bilddaten: src-Pfade und aussagekräftige alt-Texte für Barrierefreiheit
const images = [
  { src: "/slides/alicia-christin-gerald-umzug_fenster_unsplash.jpg", alt: "Person beim Umzug am Fenster" },
  { src: "/slides/chuttersnap--lkw-unsplash.jpg", alt: "LKW auf der Straße" },
  { src: "/slides/mak-hallekisten-unsplash.jpg", alt: "Kisten in Lagerhalle" },
  { src: "/slides/umzug_ryu_orn_unsplash.jpg", alt: "Umzugskartons" },
  { src: "/slides/yucel-moran-container-unsplash.jpg", alt: "Container vor einem Gebäude" }
];

onMounted(async () => {
  // Sicherstellen, dass DOM gerendert ist, bevor wir die Slides initialisieren
  await nextTick()
  // Externe Initialisierungs-Funktion im Composable aufrufen
  initSlideshow(slideEls.value, container.value)
})
</script>

<style scoped>
/* Styles für die Slideshow: Container, Slides und responsive Anpassung */
.slideshow-container {
  width: 700px;
  height: 300px;
  position: relative;
  margin: auto;
  overflow: hidden;
  background: #f5f5f5;
}

.slide {
  width: 100%;
  height: 100%;
}

.slideshow-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Responsive Anpassung */
@media (max-width: 800px) {
  .slideshow-container {
    width: 100%;
    max-width: 100vw;
    height: 180px;
  }
}
</style>