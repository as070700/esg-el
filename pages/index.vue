// ----------------------------
// Datei: pages/index.vue
// ----------------------------
<template>
  <div class="welcome">
    <h1>Willkommen bei ESG</h1>
    <p>Ihr Partner für Entrümpelung: einfach, schnell und günstig.</p>
  </div>

  <div class="links">
    <nuxt-link to="/booking">Termin buchen</nuxt-link>
    <nuxt-link to="/contact">Kontakt</nuxt-link>
  </div>

  <div class="services">
    <h2>Unsere Dienstleistungen</h2>
    <ul>
      <li>Entrümpelung</li>
      <li>Entsorgung</li>
      <li>Reinigung</li>
    </ul>
  </div>
</template>

<style scoped>

  .welcome {
    text-align: center;
    margin-top: 50px;
  }

  .welcome h1 {
    font-size: 2.5em;
    color: #333;
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

  .services h2 {
    font-size: 2em;
    color: #333;
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
