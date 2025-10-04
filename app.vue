/*
📁 Projektstruktur (Nuxt 3 - Vorlage für ESG Website)

/pages
  |-- index.vue           // Startseite
  |-- services.vue        // Leistungen
  |-- request.vue        // Terminbuchung mit Formular
  |-- contact.vue         // Kontaktformular
  |-- legalnotice.vue     // Impressum
  |-- privatypolice.vue   // Datenschutz
  |-- agb.vue             // AGB
  |-- thankyouRequest.vue // Danke-Seite nach Buchung
  |-- thankyouContact.vue // Danke-Seite nach Kontaktformular
  |-- error.vue           // Fehlerseite (404, 500, etc.)
/components
  |-- Navbar.vue          // Navigation für alle Seiten
  |-- Footer.vue          // Optionaler Footer
  |-- Slideshow.vue       // Bilderslideshow auf der Startseite
  |-- CookieBanner.vue    // Cookie-Hinweis
/app.vue                 // Hauptlayout mit Navigation + Footer
*/

// ----------------------------
// Datei: app.vue
// ----------------------------
<template>
  <div>
    <Navigation />
    <NuxtPage />
    <CookieBanner />
    <Footer />
  </div>
</template>

<script setup>
import Navigation from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import CookieBanner from '~/components/CookieBanner.vue'
</script>
