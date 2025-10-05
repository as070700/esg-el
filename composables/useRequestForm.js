import { ref } from 'vue'
import emailjs from '@emailjs/browser'

// Composable: useRequestForm
// Liefert reaktive Bindings für das Anfrageformular und eine senden()-Funktion,
// die die Daten per EmailJS verschickt und bei Erfolg weiterleitet.
export function useRequestForm() {
  // Reaktive Felder für das Formular (vorwärts im Template bindbar)
  const name = ref('')
  const surname = ref('')
  const email = ref('')
  const phone = ref('')
  const date = ref('')
  const serviceType = ref('') 
  const terms = ref(false)

  // Erfolg-Flag (kann im UI verwendet werden)
  const success = ref(false)

  // senden: baut templateParams und ruft EmailJS API auf
  const senden = async () => {
    // Aufbau der Parameter, die an das Email-Template übergeben werden
    const templateParams = {
      name: name.value,
      surname: surname.value,
      phone: phone.value,
      serviceType: serviceType.value,
      email: email.value,
      date: date.value
    }
    try {
      // EmailJS-Aufruf: Service-ID, Template-ID und Public-Key werden hier verwendet.
      // Hinweis: Für Produktion sollten Schlüssel/IDs sicher verwaltet werden (z.B. Umgebungsvariablen).
      const result = await emailjs.send(
        'service_0cd3n84',
        'template_ptsnr1o',
        templateParams,
        'm53rYLIbykizSlLjU'
      )
      console.log(result)
      // Bei Erfolg setzen und weiterleiten
      success.value = true
      window.location.href = 'https://esg-el.de/thankyouRequest'
    } catch (error) {
      // Fehlerbehandlung: Flag zurücksetzen und Fehler loggen
      success.value = false
      console.log('Fehler beim Versenden:', error)
    }
  }

  // Rückgabe der Bindings und Funktionen für die Verwendung in Komponenten
  return { name, surname, email, phone, date, serviceType, terms, success, senden }
}



