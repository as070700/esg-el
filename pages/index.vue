// ----------------------------
// Datei: pages/index.vue
// ----------------------------
<template>
  <div class="welcome">
    <h1>Willkommen bei ESG</h1>
    <p>Ihr Partner für Entrümpelung: einfach, schnell und günstig.</p>
  </div>

  <div class="links">
    <p>Hier können Sie schnell und einfach einen Termin buchen.</p>
    <nuxt-link to="/booking">Termin buchen</nuxt-link>
    <br>
    <p>Bei Fragen stehen wir Ihnen gerne zur Verfügung.</p>
    <nuxt-link to="/contact">Kontakt</nuxt-link>
  </div>

  <div>
    <Slideshow />
  </div>

  <div class="services">
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

</style>
