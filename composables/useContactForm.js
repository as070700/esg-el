// composables/useKontaktForm.js
import { ref } from 'vue'

export function useKontaktForm() {
  const name = ref('')
  const email = ref('')
  const nachricht = ref('')
  const erfolg = ref(false)

  const senden = async () => {
    await fetch('https://formsubmit.co/ajax/info@esg-el.de', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name.value, email: email.value, nachricht: nachricht.value })
    })
    erfolg.value = true
  }

  return { name, email, nachricht, erfolg, senden }
}
