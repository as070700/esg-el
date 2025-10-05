// ----------------------------
// Datei: components/Footer.vue
// ----------------------------
<template>
  <!-- Footer: zentrale Fußzeile mit Kontakt- und Rechtslinks -->
  <footer>
    <!-- Copyright und Slogan -->
    <p>&copy; 2025 ESG - einfach, schnell und günstig</p>

    <!-- Kurzer Hinweis zu Rechten -->
    <p>Alle Rechte vorbehalten.</p>

    <div class="footer-links">
      <!-- Kontakt- und rechtliche Links (Mailto und interne Seiten) -->
      <p class="footer-info">
        <a href="mailto:info@esg-el.de">info@esg-el.de</a>
        | <a href="/legalnotice"> Impressum </a>
        | <a href="/privacypolicy"> Datenschutz </a>
        | <a href="/agb"> AGB </a></p>
    </div>
  </footer>
</template>

<style scoped>
/* Styles für die Footer-Darstellung: Hintergrund, Textfarbe und Layout */

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
  color: #000;
}

.footer-info a {
  color: #003472;
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
