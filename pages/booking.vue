// ----------------------------
// Datei: pages/booking.vue
// ----------------------------
<template>
  <div class="booking-container">
    <h1>Termin buchen</h1>
    <form @submit.prevent="senden" class="booking-form">
      <!-- Hidden Felder werden entfernt, da sie im Composable gesendet werden -->
      <!-- Sichtbare Felder im Formular -->
      <input class="booking-input" type="text" v-model="name" placeholder="Vorname" required />
      <input class="booking-input" type="text" v-model="surname" placeholder="Nachname" required />
      <input class="booking-input" type="email" v-model="email" placeholder="E-Mail" required />
      <input class="booking-input" type="tel" v-model="phone" placeholder="Telefonnummer" required />
      <p>Wunschdatum:</p><input class="booking-input" type="date" placeholder="TT.MM.JJJJ" v-model="date" required />
      <select class="booking-input" v-model="serviceType" required>
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
      <label class="agb-label">
        <input type="checkbox" v-model="terms" required />
        Ich akzeptiere die <NuxtLink to="/legalnotice">AGB</NuxtLink> und die <NuxtLink to="/privatypolice">Datenschutzerklärung</NuxtLink>.
      </label>
      <button class="booking-button" type="submit">Absenden</button>
    </form>
  </div>
</template>

<script setup>
import { useBookingForm } from '~/composables/useBookingForm.js'

const { name, email, date, success, senden, serviceType } = useBookingForm()
</script>

<style scoped>
.booking-container {
  text-align: center;
  margin-top: 50px;
}

.booking-form {
  max-width: 700px;
  margin: 40px auto;
  padding: 0 10px;
}

.booking-input {
  margin-bottom: 10px;
}

select.booking-input {
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

.booking-button {
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

.booking-button:hover {
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
  .booking-form {
    max-width: 100%;
    padding: 0 5px;
  }
  .booking-input,
  select.booking-input,
  .booking-button {
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
    gap: 4px;
  }
}
</style>
