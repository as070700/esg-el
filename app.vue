/*
📁 Projektstruktur (Nuxt 3 - Vorlage für ESG Website)

/pages
  |-- index.vue           // Startseite
  |-- services.vue        // Leistungen
  |-- boocking.vue        // Terminbuchung mit Formular
  |-- contact.vue         // Kontaktformular
  |-- legalnotice.vue     // Impressum
  |-- privatypolice.vue   // Datenschutz
  |-- agb.vue             // AGB
  |-- error.vue           // Fehlerseite (404, 500, etc.)
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
