// ----------------------------
// Datei: pages/contact.vue
// ----------------------------
<template>
  <div>
    <h1>Kontakt</h1>
    <p>Sie haben Fragen? Schreiben Sie uns.</p>
    <form @submit.prevent="senden">
      <input type="text" v-model="name" placeholder="Name" required />
      <input type="email" v-model="email" placeholder="E-Mail" required />
      <textarea v-model="nachricht" placeholder="Nachricht" required></textarea>
      <button type="submit">Absenden</button>
    </form>
    <p v-if="erfolg">Danke für Ihre Nachricht!</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const nachricht = ref('')
const erfolg = ref(false)

const senden = async () => {
  await fetch('https://formsubmit.co/ajax/DEINE-EMAIL@domain.de', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: name.value, email: email.value, nachricht: nachricht.value })
  })
  erfolg.value = true
}
</script>