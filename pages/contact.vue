// ----------------------------
// Datei: pages/contact.vue
// ----------------------------
<template>
  <div class="contact-container">
    <h1>Kontakt</h1>
    <p>Sie haben Fragen? Schreiben Sie uns.</p>
    <form @submit.prevent="senden" class="contact-form">
      <input class="contact-input" type="text" v-model="name" placeholder="Name" required />
      <input class="contact-input" type="email" v-model="email" placeholder="E-Mail" required />
      <textarea class="contact-input" v-model="nachricht" placeholder="Nachricht" required></textarea>
      <button class="contact-button" type="submit">Absenden</button>
    </form>
  </div>
</template>

<script setup>
import { useContactForm } from '~/composables/useContactForm.js'

const { name, email, nachricht, erfolg, senden } = useContactForm()
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