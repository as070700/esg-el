// composables/useContactForm.js
import { ref } from 'vue'

export function useContactForm() {
  const name = ref('')
  const email = ref('')
  const nachricht = ref('')
  const success = ref(false)

  const senden = async () => {
    const formData = new FormData()
    formData.append('name', name.value)
    formData.append('email', email.value)
    formData.append('nachricht', nachricht.value)
    formData.append('_template', 'table')
    formData.append('_subject', 'Neue Kontaktanfrage von ESG')
    formData.append('_captcha', 'false')
    formData.append('_autoresponse', 'Vielen Dank für Ihre Nachricht! Wir melden uns zeitnah bei Ihnen.')

    const response = await fetch('https://formsubmit.co/info@esg-el.de', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    console.log(response)
    try {
      const result = await response.json()
      console.log(result)
    } catch (e) {
      console.log('Keine JSON-Antwort erhalten:', e)
    }
    if (response.ok) {
      success.value = true
      console.log('Formular erfolgreich versendet.')
      window.location.href = 'https://esg-el.de/thankyouContact'
    } else {
      success.value = false
      console.log('Fehler beim Versenden des Formulars:', response.status)
    }
  }

  return { name, email, nachricht, success, senden }
}
