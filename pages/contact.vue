// ----------------------------
// Datei: pages/contact.vue
// ----------------------------
<template>
  <div>
    <h1>Kontakt</h1>
    <p>Sie haben Fragen? Schreiben Sie uns.</p>
    <form @submit.prevent="senden">
      <input class="contact-input" type="text" v-model="name" placeholder="Name" required />
      <input class="contact-input" type="email" v-model="email" placeholder="E-Mail" required />
      <textarea class="contact-input" v-model="nachricht" placeholder="Nachricht" required></textarea>
      <button class="contact-button" type="submit">Absenden</button>
    </form>
    <p class="success-message" v-if="erfolg">Danke für Ihre Nachricht!</p>
  </div>
</template>

<script setup>
import { useKontaktForm } from '~/composables/useKontaktForm.js'

const { name, email, nachricht, erfolg, senden } = useKontaktForm()
</script>

<style scoped>

.contact-input {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
}

.success-message {
  color: green;
  margin-top: 10px;
}

.contact-button {
  background-color: #008CBA;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}
.contact-button:hover {
  background-color: #005f73;
}
</style>