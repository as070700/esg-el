// ----------------------------
// Datei: pages/booking.vue
// ----------------------------
<template>
  <div>
    <h1>Termin buchen</h1>
    <form @submit.prevent="senden">
      <input type="text" v-model="name" placeholder="Name" required />
      <input type="email" v-model="email" placeholder="E-Mail" required />
      <input type="date" v-model="date" required />
      <button class="buchungs-button" type="submit">Absenden</button>
    </form>
    <p v-if="success">Vielen Dank! Wir melden uns in Kürze.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const date = ref('')
const success = ref(false)

const senden = async () => {
  await fetch('https://formsubmit.co/ajax/info@esg-el.de', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: name.value, email: email.value, date: date.value })
  })
  success.value = true
}
</script>

<style scoped>
.buchungs-button {
  background-color: #008CBA;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}
.buchungs-button:hover {
  background-color: #005f73;
}
</style>
