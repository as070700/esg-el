// composables/useContactForm.js
import { ref } from 'vue'

export function useContactForm() {
  const name = ref('')
  const email = ref('')
  const nachricht = ref('')
  const erfolg = ref(false)

  const senden = async () => {
    const formData = new URLSearchParams({
      name: name.value,
      email: email.value,
      nachricht: nachricht.value,
      _replyto: email.value,
      _template: "table",
      _subject: "Neue Kontaktanfrage von ESG",
      _honey: ""
    })

    await fetch('https://formsubmit.co/ajax/info@esg-el.de', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData
    })
    erfolg.value = true
    window.location.href = "https://esg-el.de/thankyouContact"
  }

  return { name, email, nachricht, erfolg, senden }
}
