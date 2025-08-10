import { ref } from 'vue'

export function useBookingForm() {
  const name = ref('')
  const email = ref('')
  const date = ref('')
  const success = ref(false)

  const senden = async () => {
    await fetch('https://formsubmit.co/ajax/info@esg-el.de', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name.value, email: email.value, date: date.value })
    })
    success.value = true
  }

  return { name, email, date, success, senden }
}

