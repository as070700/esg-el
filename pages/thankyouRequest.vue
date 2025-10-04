// ----------------------------
// Datei: pages/thankyou.vue
// ----------------------------
<template>
  <div class="thankyou-container">
    <h1>Vielen Dank für Ihre Buchung!</h1>
    <p>Wir haben Ihre Anfrage erhalten und werden uns in Kürze bei Ihnen melden.</p>
    <p>Sie bekommen in Kürze eine Bestätigungsmail. Bitte schauen Sie zusätzlich im Spam-Ordner nach.</p>
    <NuxtLink to="/">Zur Startseite</NuxtLink>
    <p></p>
    <NuxtLink to="/request">Neuen Termin buchen</NuxtLink>
    <p></p>
    <NuxtLink to="/contact">Kontakt</NuxtLink>
    <p></p>
  </div>
</template>

<style scoped>
.thankyou-container {
  text-align: center;
  margin-top: 50px;
}
</style>