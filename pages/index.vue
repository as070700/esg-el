// ----------------------------
// Datei: pages/index.vue
// ----------------------------
<template>
  <!-- Startseiten-Bereich: Titel und kurze Beschreibung -->
  <div class="welcome">
    <!-- Wichtig: Haupttitel der Startseite (SEO-relevant) -->
    <h1>Willkommen bei ESG - EL</h1>
    <!-- Kurzbeschreibung / USP -->
    <p>Ihr Partner für Entrümpelung: einfach, schnell und günstig.</p>
  </div>

  <!-- Schnellnavigation: Anfrage & Kontakt -->
  <div class="links">
    <!-- Hinweis: nuxt-link verwendet für clientseitige Navigation -->
    <p>Hier können Sie schnell und einfach einen Termin anfragen.</p>
    <nuxt-link to="/request">Termin anfragen</nuxt-link>
    <br>
    <p>Bei Fragen stehen wir Ihnen gerne zur Verfügung.</p>
    <nuxt-link to="/contact">Kontakt</nuxt-link>
  </div>

  <!-- Slideshow: visuelle Vorstellung (Komponente wird im Script importiert) -->
  <div class="slideshow-container">
    <Slideshow />
  </div>

  <!-- Dienstleistungen: Liste der angebotenen Services -->
  <div class="services">
    <!-- Hinweis: diese Liste beschreibt Kernangebote — ggf. Links zu Detailseiten hinzufügen -->
    <h2>Unsere Dienstleistungen</h2>
    <ul>
      <li>Entrümpelung</li>
      <li>Entsorgung</li>
      <li>Reinigung</li>
      <li>Umzüge</li>
      <li>Haushaltsauflösungen</li>
      <li>Transportdienste</li>
      <li>Montageservice</li>
      <li>Beratung und Planung</li>
    </ul>
  </div>
</template>

<script setup>
import Slideshow from '~/components/Slideshow.vue'
/* Hinweis: Slideshow-Komponente wird oben verwendet. */
</script>

<style scoped>

  .welcome {
    text-align: center;
    margin-top: 50px;
  }

  .welcome p {
    font-size: 1.2em;
    color: #666;
  }

  .links {
    text-align: center;
    margin: 20px 0;
  }

  .links nuxt-link {
    margin: 0 10px;
  }

  .services {
    text-align: center;
    margin: 40px 0;
  }

  .services ul {
    list-style: none;
    padding: 0;
  }

  .services li {
    font-size: 1.2em;
    color: #666;
  }

  .slideshow-container {
    position: relative;
    max-width: 700px;
    margin: 0 auto 40px auto;
    min-height: 300px; /* optional, je nach Bildgröße */
  }

  /* Buttons für die Slideshow */
  .slideshow-prev-btn,
  .slideshow-next-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    background: rgba(255,255,255,0.7);
    border: none;
    font-size: 2rem;
    cursor: pointer;
    padding: 0 12px;
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(0,0,0,0.15);
    user-select: none;
  }

  .slideshow-prev-btn {
    left: 10px;
  }

  .slideshow-next-btn {
    right: 10px;
  }

  @media (max-width: 600px) {
    .slideshow-container {
      max-width: 100%;
      min-height: 180px;
    }
    .slideshow-prev-btn,
    .slideshow-next-btn {
      font-size: 1.5rem;
      padding: 0 8px;
    }
  }

</style>
