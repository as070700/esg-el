<template>
  <div class="slideshow-container">
    <img v-for="(image, index) in images" 
         :key="index" 
         :src="image" 
         class="slide" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initSlideshow } from '@/composables/slideshow.js'

// Bilder aus dem public-Ordner
const images = [
  "/slides/alicia-christin-gerald-umzug_fenster_unsplash.jpg",
  "/slides/chuttersnap--lkw-unsplash.jpg",
  "/slides/mak-hallekisten-unsplash.jpg",
  "/slides/umzug_ryu_orn_unsplash.jpg",
  "/slides/yucel-moran-container-unsplash.jpg"
];

onMounted(() => {
  initSlideshow('.slide')
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