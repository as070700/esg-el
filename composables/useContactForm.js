// Composable: useContactForm
// Liefert reaktive Felder für ein Kontaktformular und eine Funktion zum Versenden per EmailJS.

import { ref } from 'vue'
import emailjs from '@emailjs/browser'

export function useContactForm() {
  // Reaktive Formularfelder (bindbar im Template)
  const name = ref('')
  const email = ref('')
  const message = ref('')

  // Erfolg/Fehler-Indikator (kann im UI angezeigt werden)
  const success = ref(false)

  // senden: baut die Template-Parameter und sendet die E-Mail über EmailJS
  const senden = async () => {
    // Template-Parameter für EmailJS (Objekt übergeben an das Template)
    const templateParams = {
      name: name.value,
      email: email.value,
      message: message.value
    }
    try {
      // EmailJS-Aufruf: Service-ID, Template-ID und Public-Key werden hier verwendet.
      // Hinweis: Schlüssel/IDs sollten sicher verwaltet werden (z.B. Umgebungsvariablen), nicht hartkodiert.
      const result = await emailjs.send(
        'service_0cd3n84',
        'template_h762u1f',
        templateParams,
        'm53rYLIbykizSlLjU'
      )
      console.log(result)
      success.value = true
      // Weiterleitung nach erfolgreichem Versand (Relativer Pfad auf Produktivdomain prüfen)
      window.location.href = 'https://esg-el.de/thankyouContact'
    } catch (error) {
      // Fehlerfall: Erfolg-Flag false und Logging für Debugging
      success.value = false
      console.log('Fehler beim Versenden:', error)
    }
  }

  // Rückgabe der Bindings und der Sende-Funktion
  return { name, email, message, success, senden }
}