// ----------------------------
// Datei: pages/thankyou.vue
// ----------------------------
<template>
  <div class="thankyou-container">
    <!-- Hauptüberschrift: Danksagung nach erfolgreicher Buchung -->
    <h1>Vielen Dank für Ihre Buchung!</h1>

    <!-- Hinweis: Information zum weiteren Ablauf -->
    <p>Wir haben Ihre Anfrage erhalten und werden uns in Kürze bei Ihnen melden.</p>

    <!-- Hinweis: Bestätigungsmail und Spam-Hinweis -->
    <p>Sie bekommen in Kürze eine Bestätigungsmail. Bitte schauen Sie zusätzlich im Spam-Ordner nach.</p>

    <!-- Navigation: Links zurück zur Startseite und zu weiteren Formularen -->
    <NuxtLink to="/">Zur Startseite</NuxtLink>
    <p></p>
    <NuxtLink to="/request">Neuen Termin anfragen</NuxtLink>
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