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
    formData.append('date', date.value)
    formData.append('_replyto', email.value)
    formData.append('_template', 'table')
    formData.append('_subject', 'Neue Terminbuchung von ESG')
    formData.append('_autoresponse', 'Vielen Dank für Ihre Buchung! Wir melden uns zeitnah bei Ihnen.')
    formData.append('_honey', '')

    await fetch('https://formsubmit.co/info@esg-el.de', {
      method: 'POST',
      body: formData
    })
    success.value = true
    window.location.href = "https://esg-el.de/thankyouBooking"
  }

  return { name, surname, email, phone, date, serviceType, terms, success, senden }
}


