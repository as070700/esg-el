<template>
  <nav class="navbar">
    <!-- Logo -->
    <NuxtLink to="/"><img src="/esg_logo.jpg" alt="ESG Logo" class="logo"></NuxtLink> 

    <!-- Desktop-Menü -->
    <ul class="nav-links" :class="{ open: isOpen }">
      <NuxtLink to="/booking">Buchen</NuxtLink>
      <NuxtLink to="/contact">Kontakt</NuxtLink>
      <NuxtLink to="/leichtesprache" aria-label="Zur Seite in Leichter Sprache">Leichte Sprache</NuxtLink>
    </ul>

    <!-- Hamburger-Icon (nur mobil sichtbar) -->
    <div class="hamburger" :class="{ active: isOpen }" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}
</script>

<style scoped>
/* === Allgemein === */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  background: #82ade2;
  color: #000;
  position: relative;
}

.logo {
  width: 150px;
  height: auto;
  display: inline-block;
  vertical-align: middle;
}

.logo:hover {
  transform: scale(1.1);
  transition: transform 1s ease;
}

/* === Desktop-Menü === */
.nav-links {
  display: flex;
  gap: 20px;
  list-style: none;
}

.nav-links a {
  color: #003472;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #274569;
}

/* === Hamburger Icon === */
.hamburger {
  display: none; /* Standard: ausgeblendet */
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  width: 30px;
  height: 20px;
}

.hamburger span {
  background: #000;
  height: 3px;
  width: 100%;
  border-radius: 5px;
  transition: 0.4s;
}

/* === Animation: Hamburger -> X === */
.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.hamburger.active span:nth-child(2) {
  opacity: 0;
}
.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* === Responsive (Mobile) === */
@media (max-width: 768px) {
  .nav-links {
    display: none; /* Standard: versteckt */
    flex-direction: column;
    position: absolute;
    top: 80%;
    right: 0;
    background: #82ade2;
    width: 200px;
    padding: 15px;
    border-radius: 0 0 8px 8px;
  }

  .nav-links.open {
    display: flex; /* sichtbar wenn isOpen true */
  }

  .hamburger {
    display: flex; /* nur mobil sichtbar */
  }
}

</style>