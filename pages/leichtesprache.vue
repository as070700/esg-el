<template>
  <div class="leichtesprache">
    <h1>Willkommen bei ESG in Leichter Sprache</h1>
    <p>Wir helfen Ihnen beim Aufräumen und Umziehen.</p>
    <p>Sie können uns anrufen oder eine Nachricht schreiben.</p>
    <ul>
      <li>Wir räumen Ihre Wohnung oder Ihr Haus aus.</li>
      <li>Wir bringen Sachen weg, die Sie nicht mehr brauchen.</li>
      <li>Wir machen sauber.</li>
      <li>Wir helfen beim Umzug.</li>
      <li>Wir beraten Sie gerne.</li>
    </ul>
    <p>Sie möchten einen Termin? <nuxt-link to="/booking">Hier klicken</nuxt-link></p>
    <p>Sie haben Fragen? <nuxt-link to="/contact">Hier klicken</nuxt-link></p>
  </div>
</template>

<script setup>
// Kein spezielles Script benötigt
</script>

<style scoped>
.leichtesprache {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-size: 1.2em;
  border-radius: 12px;
}
.leichtesprache h1 {
  font-size: 1.5em;
  margin-bottom: 1rem;
}
.leichtesprache ul {
  margin: 1rem 0;
  padding-left: 1.2em;
}
.leichtesprache li {
  margin-bottom: 0.5em;
}
.leichtesprache p {
  margin-bottom: 1em;
}
</style>