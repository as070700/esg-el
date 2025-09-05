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
    const formData = new URLSearchParams({
      name: name.value,
      surname: surname.value,
      phone: phone.value,
      serviceType: serviceType.value,
      email: email.value,
      date: date.value,
      _replyto: email.value,
      _template: "table",
      _subject: "Neue Terminbuchung von ESG",
      _honey: ""
    })

    await fetch('https://formsubmit.co/ajax/info@esg-el.de', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData
    })
    success.value = true
    window.location.href = "https://esg-el.de/thankyouBooking"
  }

  return { name, surname, email, phone, date, serviceType, terms, success, senden }
}

