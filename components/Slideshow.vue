<template>
  <div class="slideshow-container">
    <img v-for="(image, index) in images" 
         :key="index" 
         :src="image.src" 
         :alt="image.alt" 
         class="slide"
         ref="slides" />   <!-- ref hinzugefügt -->
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue'
import { initSlideshow } from '@/composables/slideshow.js'

const slides = ref([])  // Ref für alle Bilder

const images = [
  { src: "/slides/alicia-christin-gerald-umzug_fenster_unsplash.jpg", alt: "Person beim Umzug am Fenster" },
  { src: "/slides/chuttersnap--lkw-unsplash.jpg", alt: "LKW auf der Straße" },
  { src: "/slides/mak-hallekisten-unsplash.jpg", alt: "Kisten in Lagerhalle" },
  { src: "/slides/umzug_ryu_orn_unsplash.jpg", alt: "Umzugskartons" },
  { src: "/slides/yucel-moran-container-unsplash.jpg", alt: "Container vor einem Gebäude" }
];

onMounted(async () => {
  await nextTick() // sicherstellen, dass DOM gerendert ist
  initSlideshow(slides.value)
})
</script>

<style scoped>
.slideshow-container {
  max-width: 600px;
  position: relative;
  margin: auto;
}

.slide {
  display: none;
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
}
</style>