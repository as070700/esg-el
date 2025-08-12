// ----------------------------
// Datei: components/Footer.vue
// ----------------------------
<template>
  <footer>
    <p>&copy; 2025 ESG - einfach, schnell und günstig</p>
    <p>Alle Rechte vorbehalten.</p>
    <div class="footer-links">
      <p class="footer-info">
        <a href="mailto:info@esg-el.de">info@esg-el.de</a>
        | <a href="/legalnotice"> Impressum </a>
        | <a href="/privacypolicy"> Datenschutz </a>
        | <a href="/agb"> AGB </a></p>
    </div>
  </footer>
</template>

<style scoped>

footer {
  width: 100%;
  height: 120px;
  background: #82ade2;
  text-align: center;
  position: relative;
  padding: 1rem;
}

footer p {
  margin: 0.5rem 0;
  color: #fff;
}

.footer-info a {
  color: #5e7ca0;
  text-decoration: none;
}

.footer-info p {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
}

footer p a:hover {
  text-decoration: underline;
}

.footer-links {
  align-items: center;
}

.footer-info {
  display: inline;
}

</style>
