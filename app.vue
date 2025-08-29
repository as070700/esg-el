/*
📁 Projektstruktur (Nuxt 3 - Vorlage für ESG Website)

/pages
  |-- index.vue           // Startseite
  |-- leistungen.vue      // Leistungen
  |-- buchen.vue          // Terminbuchung mit Formular
  |-- kontakt.vue         // Kontaktformular
/components
  |-- Navbar.vue          // Navigation für alle Seiten
  |-- Footer.vue          // Optionaler Footer
/app.vue                 // Hauptlayout mit Navigation + Footer
*/

// ----------------------------
// Datei: app.vue
// ----------------------------
<template>
  <div>
    <Navigation />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
import Navigation from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
</script>
