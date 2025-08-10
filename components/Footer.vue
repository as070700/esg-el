// ----------------------------
// Datei: components/Footer.vue
// ----------------------------
<template>
  <footer>
    <p>&copy; 2025 ESG - einfach, schnell und günstig</p>
    <p>Alle Rechte vorbehalten.</p>
    <div class="footer-links">
      <p>Kontakt: <a href="mailto:info@esg-el.de">info@esg-el.de</a></p>
      <p>Impressum: <a href="/legalnotice">Impressum</a></p>
      <p>Datenschutz: <a href="/privacypolicy">Datenschutz</a></p>
      <p>AGB: <a href="/agb">AGB</a></p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  margin-top: 2rem;
  padding: 1rem;
  background: #f0f0f0;
  text-align: center;
}

.footer-links {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
