<template>
  <div class="leichtesprache">
    <!-- Hauptüberschrift: Begrüßung in einfacher Sprache -->
    <h1>Willkommen bei ESG - EL!</h1>

    <!-- Kurzbeschreibung: was die Seite/das Angebot macht -->
    <p>Wir helfen Ihnen beim Aufräumen.</p>
    <p>Sie können schnell einen Termin machen.</p>
    <p>Bei Fragen können Sie uns anrufen.</p>

    <!-- Liste der angebotenen Leistungen in einfacher Sprache -->
    <p>Unsere Dienste:</p>
    <ul>
      <!-- Serviceeinträge: klare, einfache Formulierungen -->
      <li>Aufräumen</li>
      <li>Wegwerfen von Sachen</li>
      <li>Saubermachen</li>
      <li>Umzüge</li>
      <li>Auflösen von Wohnungen</li>
      <li>Transport</li>
      <li>Zusammenbauen</li>
      <li>Beratung</li>
    </ul>

    <!-- Navigation: direkte Links zu Anfrage und Kontakt -->
    <p>Sie möchten einen Termin? <nuxt-link to="/request">Hier klicken</nuxt-link></p>
    <p>Sie haben Fragen? <nuxt-link to="/contact">Hier klicken</nuxt-link></p>
  </div>
</template>

<script setup>
//Kein spezielles Script benötigt
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