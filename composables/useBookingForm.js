import { ref } from 'vue'

export function useBookingForm() {
  const name = ref('')
  const surname = ref('')
  const email = ref('')
  const phone = ref('')
  const date = ref('')
  const serviceType = ref('') 
  const terms = ref(false)
  const success = ref(false)

  const senden = async () => {
    const formData = new FormData()
    formData.append('name', name.value)
    formData.append('surname', surname.value)
    formData.append('phone', phone.value)
    formData.append('serviceType', serviceType.value)
    formData.append('email', email.value)
    // Kopie an eine weitere Adresse senden (optional, z.B. eigene Testadresse)
    formData.append('_cc', 'vuzituye@mailgolem.com')
    formData.append('date', date.value)
    formData.append('_template', 'table')
    formData.append('_subject', 'Neue Terminbuchung von ESG')
    formData.append('_autoresponse', 'Vielen Dank für Ihre Buchung! Wir melden uns zeitnah bei Ihnen.')
    formData.append('_next', 'https://esg-el.de/thankyouBooking')

    const response = await fetch('https://formsubmit.co/info@esg-el.de', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    if (response.ok) {
      success.value = true
      console.log('Formular erfolgreich versendet.')
      window.location.href = 'https://esg-el.de/thankyouBooking'
    } else {
      success.value = false
      console.log('Fehler beim Versenden des Formulars:', response.status)
      // Optional: Fehlerbehandlung
    }
  }

  return { name, surname, email, phone, date, serviceType, terms, success, senden }
}


