// ----------------------------
// Datei: pages/contact.vue
// ----------------------------
<template>
  <div class="contact-container">
    <!-- Wichtig: Seitenüberschrift für Kontakt -->
    <h1>Kontakt</h1>
    <!-- Kurzer Hinweis zur Funktion der Seite -->
    <p>Sie haben Fragen? Schreiben Sie uns.</p>

    <!-- Formular: hier wird die Senden-Funktion des Composables aufgerufen -->
    <form @submit.prevent="senden" class="contact-form">
      <!-- Feld: Name (erforderlich) -->
      <input class="contact-input" type="text" v-model="name" placeholder="Name" required tabindex="1" />
      <!-- Feld: E-Mail (wichtig für Rückmeldung) -->
      <input class="contact-input" type="email" v-model="email" placeholder="E-Mail" required tabindex="2" />
      <!-- Feld: Nachricht (ausführlicher Text) -->
      <textarea class="contact-input" v-model="message" placeholder="Nachricht" required tabindex="3"></textarea>

      <!-- Button: löst die Aktion 'senden' aus; tabindex für Tastatur-Navigation -->
      <button class="contact-button" type="submit" tabindex="4">Absenden</button>

      <!-- Beispielplatzhalter: <p v-if="erfolg">Vielen Dank, Ihre Nachricht wurde gesendet.</p> -->
    </form>
  </div>
</template>

<script setup>
import { useContactForm } from '~/composables/useContactForm.js'

/* Wichtig: useContactForm liefert reactive refs und die senden-Funktion.
   - name, email, message: Bindings für die Eingabefelder
   - erfolg: optionaler Indikator für erfolgreichen Versand
   - senden(): wird beim Submit aufgerufen      */
const { name, email, message, erfolg, senden } = useContactForm()
</script>

<style scoped>
.contact-container {
  text-align: center;
  margin-top: 50px;
}

.contact-form {
  max-width: 400px;
  margin: 40px auto;
  padding: 0 10px;
}

.contact-input {
  margin-bottom: 10px;
}

.contact-button {
  background-color: #1a4e8a;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
  max-width: 400px;
}
.contact-button:hover {
  background-color: #20436a;
}

textarea.contact-input {
  width: 100%;
  height: 250px;
}

/* Mobile Styles */
@media (max-width: 600px) {
  .contact-form {
    max-width: 100%;
    padding: 0 5px;
  }
  .contact-input,
  .contact-button,
  textarea.contact-input {
    width: 100%;
    min-width: unset;
    max-width: unset;
    font-size: 1rem;
  }
}
</style>