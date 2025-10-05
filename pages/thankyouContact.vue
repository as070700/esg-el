// ----------------------------
// Datei: pages/thankyou.vue
// ----------------------------
<template>
  <div class="thankyou-container">
    <!-- Hauptüberschrift: Danksagung nach erfolgreicher Kontaktaufnahme -->
    <h1>Vielen Dank für Ihre Kontaktaufnahme!</h1>

    <!-- Hinweis: Information zum weiteren Ablauf -->
    <p>Wir haben Ihre Anfrage erhalten und werden uns in Kürze bei Ihnen melden.</p>

    <!-- Hinweis: Bestätigungsmail und Spam-Hinweis -->
    <p>Sie bekommen in Kürze eine Bestätigungsmail. Bitte schauen Sie zusätzlich im Spam-Ordner nach.</p>

    <!-- Navigation: Links zurück zur Startseite und weiteren Formularen -->
    <NuxtLink to="/">Zur Startseite</NuxtLink>
    <p></p>
    <NuxtLink to="/contact">Neuen Kontaktanfrage</NuxtLink>
    <p></p>
    <NuxtLink to="/request">Termin anfragen</NuxtLink>
    <p></p>
  </div>
</template>

<style scoped>
/* Container-Stil für die Dankeseite */
.thankyou-container {
  text-align: center;
  margin-top: 50px;
}
</style>