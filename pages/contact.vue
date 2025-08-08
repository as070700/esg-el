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
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const nachricht = ref('')
const erfolg = ref(false)

const senden = async () => {
  await fetch('https://formsubmit.co/ajax/info@esg-el.de', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: name.value, email: email.value, nachricht: nachricht.value })
  })
  erfolg.value = true
}
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