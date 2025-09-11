// ----------------------------
// Datei: components/CookieBanner.vue
// ----------------------------
<template>
  <div v-if="!consentGiven" class="cookie-banner">
    <p>Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Bitte wählen Sie, welche Cookies Sie erlauben möchten.</p>
    <div class="cookie-actions">
      <button @click="acceptEssential">Nur notwendige</button>
      <button @click="acceptAll">Alle akzeptieren</button>
      <button class="settings" @click="showSettings = !showSettings">Einstellungen</button>
    </div>
    <div v-if="showSettings" class="cookie-settings">
      <p><strong>Cookie-Einstellungen (Platzhalter):</strong></p>
      <label>
        <input type="checkbox" checked disabled /> Notwendige Cookies (immer aktiv)
      </label>
      <label>
        <input type="checkbox" v-model="analytics" /> Statistik / Analyse Cookies
      </label>
      <button @click="saveSettings">Speichern</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const consentGiven = ref(false);
const showSettings = ref(false);
const analytics = ref(false);

onMounted(() => {
  consentGiven.value = localStorage.getItem('cookieConsent') !== null;
});

function acceptEssential() {
  localStorage.setItem('cookieConsent', JSON.stringify({ essential: true, analytics: false }));
  consentGiven.value = true;
}

function acceptAll() {
  localStorage.setItem('cookieConsent', JSON.stringify({ essential: true, analytics: true }));
  consentGiven.value = true;
}

function saveSettings() {
  localStorage.setItem('cookieConsent', JSON.stringify({ essential: true, analytics: analytics.value }));
  consentGiven.value = true;
}
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(139, 137, 137, 0.98);
  color: #f5f5f5;
  padding: 1.2rem 1.5rem;
  border-radius: 0;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  z-index: 1000;
  font-size: 1rem;
  gap: 1rem;
  max-width: none;
  transform: none;
}
.cookie-banner p {
  margin: 0 0 0.5rem 0;
  font-size: 1em;
}
.cookie-actions {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
button {
  background: linear-gradient(90deg, #1a4e8a 60%, #275992 100%);
  color: #fff;
  border: none;
  padding: 0.6rem 1.1rem;
  cursor: pointer;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1em;
}
button.settings {
  background: #888;
}
button:hover {
  background: linear-gradient(90deg, #20436a 60%, #305176 100%);
}
.cookie-settings {
  background: #222;
  color: #fff;
  border-radius: 10px;
  padding: 1rem;
  margin-top: 0.5rem;
  font-size: 0.97em;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
}
.cookie-settings label {
  display: block;
  margin-bottom: 0.5rem;
}
.cookie-settings button {
  margin-top: 0.5rem;
  width: 100%;
  background: #4caf50;
}
@media (max-width: 600px) {
  .cookie-banner {
    padding: 1rem 0.7rem;
    font-size: 0.97rem;
    max-width: 98vw;
    gap: 0.7rem;
  }
  .cookie-actions {
    flex-direction: column;
    gap: 0.5rem;
  }
  button {
    width: 100%;
    padding: 0.7rem 0;
    font-size: 1em;
  }
}
</style>
