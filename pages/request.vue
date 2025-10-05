// ----------------------------
// Datei: pages/request.vue
// ----------------------------
<template>
  <div class="request-container">
    <!-- Seitenüberschrift: Anfrageformular für Termine -->
    <h1>Termin anfragen</h1>

    <!-- Formular: verhindert Default-Submit und ruft 'senden' aus Composable auf -->
    <form @submit.prevent="senden" class="request-form">
      <!-- Vorname: Pflichtfeld -->
      <input class="request-input" type="text" v-model="name" placeholder="Vorname" required tabindex="1" />

      <!-- Nachname: Pflichtfeld -->
      <input class="request-input" type="text" v-model="surname" placeholder="Nachname" required tabindex="2" />

      <!-- E‑Mail: für Rückmeldung erforderlich -->
      <input class="request-input" type="email" v-model="email" placeholder="E-Mail" required tabindex="3" />

      <!-- Telefonnummer: Kontaktmöglichkeit -->
      <input class="request-input" type="tel" v-model="phone" placeholder="Telefonnummer" required tabindex="4" />

      <!-- Wunschdatum: Datumsauswahl für Termin -->
      <p>Wunschdatum:</p><input class="request-input" type="date" placeholder="TT.MM.JJJJ" v-model="date" required tabindex="5" />

      <!-- Auswahl: Art der gewünschten Leistung -->
      <select class="request-input" v-model="serviceType" required tabindex="6">
        <option value="" disabled>Art der Leistung wählen</option>
        <option value="Entrümpelung">Entrümpelung</option>
        <option value="Entsorgung">Entsorgung</option>
        <option value="Reinigung">Reinigung</option>
        <option value="Umzüge">Umzüge</option>
        <option value="Haushaltsauflösungen">Haushaltsauflösungen</option>
        <option value="Transportdienste">Transportdienste</option>
        <option value="Montageservice">Montageservice</option>
        <option value="Beratung und Planung">Beratung und Planung</option>
      </select>

      <!-- Checkbox: Einwilligung in AGB und Datenschutz (erforderlich) -->
      <label class="agb-label">
        <input type="checkbox" v-model="terms" required tabindex="7" />
        Ich akzeptiere die <NuxtLink to="/legalnotice">AGB</NuxtLink> und die <NuxtLink to="/privatypolice">Datenschutzerklärung</NuxtLink>.
      </label>

      <!-- Absenden: löst 'senden' im Composable aus -->
      <button class="request-button" type="submit" tabindex="8">Absenden</button>
    </form>
  </div>
</template>

<script setup>
/* Import des Composables: liefert reactive refs für Formularfelder und die senden-Funktion */
import { useRequestForm } from '~/composables/useRequestForm.js'

const { name, surname, email, phone, date, serviceType, success, senden } = useRequestForm()
</script>

<style scoped>
.request-container {
  text-align: center;
  margin-top: 50px;
}

.request-form {
  max-width: 700px;
  margin: 40px auto;
  padding: 0 10px;
}

.request-input {
  margin-bottom: 10px;
}

select.request-input {
  width: 100%;
  min-width: 200px;
  max-width: 400px;
  display: block;
  margin: 0 auto 10px auto;
  height: 48px; 
  font-size: 1rem;
  padding: 10px;
  box-sizing: border-box;
}

.request-button {
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

.request-button:hover {
  background-color: #20436a;
}

.agb-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  margin-bottom: 10px;
  flex-wrap: wrap;
}
.agb-label input[type="checkbox"] {
  width: auto;
  margin-bottom: 0;
}

/* Mobile Styles */
@media (max-width: 600px) {
  .request-form {
    max-width: 100%;
    padding: 0 5px;
  }
  .request-input,
  select.request-input,
  .request-button {
    width: 100%;
    min-width: unset;
    max-width: unset;
    font-size: 1rem;
  }
  .agb-label {
    width: 100%;
    font-size: 0.85rem;
    align-items: flex-start;
    gap: 4px;
  }
}
</style>
