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
    await fetch('https://formsubmit.co/ajax/info@esg-el.de', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        name: name.value, 
        surname: surname.value, 
        phone: phone.value, 
        serviceType: serviceType.value,
        email: email.value, 
        date: date.value,
        _replyto: email.value // sorgt für Bestätigungs-E-Mail an den Kunden
      })
    })
    success.value = true
  }

  return { name, surname, email, phone, date, serviceType, terms, success, senden }
}

