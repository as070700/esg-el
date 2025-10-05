// ----------------------------
// Datei: components/CookieBanner.vue
// ----------------------------
<template>
  <!-- Cookie-Banner: erscheint, wenn noch keine Zustimmung im localStorage vorhanden ist -->
  <div v-if="!consentGiven" class="cookie-banner">
    <!-- Kurzer Hinweistext zum Zweck der Cookies -->
    <p>Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Bitte wählen Sie, welche Cookies Sie erlauben möchten.</p>

    <!-- Aktionsbuttons: Auswahlmöglichkeiten für Nutzer -->
    <div class="cookie-actions">
      <!-- Nur notwendige Cookies akzeptieren -->
      <button @click="acceptEssential">Nur notwendige</button>
      <!-- Alle Cookies akzeptieren -->
      <button @click="acceptAll">Alle akzeptieren</button>
      <!-- Anzeige der erweiterten Einstellungen umschalten -->
      <button class="settings" @click="showSettings = !showSettings">Einstellungen</button>
    </div>

    <!-- Erweiterte Einstellungen: steuerbar per showSettings -->
    <div v-if="showSettings" class="cookie-settings">
      <p><strong>Cookie-Einstellungen (Platzhalter):</strong></p>
      <!-- Notwendige Cookies: immer aktiv -->
      <label>
        <input type="checkbox" checked disabled /> Notwendige Cookies (immer aktiv)
      </label>
      <!-- Analytics-Opt-In -->
      <label>
        <input type="checkbox" v-model="analytics" /> Statistik / Analyse Cookies
      </label>
      <!-- Speichert die Einstellungen in localStorage -->
      <button @click="saveSettings">Speichern</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

/* Reactive Flags:
     - consentGiven: ob bereits Zustimmungsdaten vorhanden sind
     - showSettings: Steuerung der Sichtbarkeit des Einstellungsbereichs
     - analytics: Auswahl für Analyse-Cookies */
const consentGiven = ref(false);
const showSettings = ref(false);
const analytics = ref(false);

onMounted(() => {
  // Prüfen, ob bereits eine Zustimmung gespeichert ist (localStorage)
  consentGiven.value = localStorage.getItem('cookieConsent') !== null;
});

function acceptEssential() {
  // Nur essentielle Cookies akzeptieren und Zustimmung speichern
  localStorage.setItem('cookieConsent', JSON.stringify({ essential: true, analytics: false }));
  consentGiven.value = true;
}

function acceptAll() {
  // Alle Cookies akzeptieren und Zustimmung speichern
  localStorage.setItem('cookieConsent', JSON.stringify({ essential: true, analytics: true }));
  consentGiven.value = true;
}

function saveSettings() {
  // Benutzerdefinierte Einstellungen speichern (essential = true immer)
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
