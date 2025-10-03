// composables/useContactForm.js
import { ref } from 'vue'
import emailjs from 'emailjs-com'

export function useContactForm() {
  const name = ref('')
  const email = ref('')
  const message = ref('')
  const success = ref(false)

  const senden = async () => {
    const templateParams = {
      name: name.value,
      email: email.value,
      message: message.value
    }
    try {
      const result = await emailjs.send(
        'service_0cd3n84',
        'template_h762u1f',
        templateParams,
        'm53rYLIbykizSlLjU'
      )
      console.log(result)
      success.value = true
      window.location.href = 'https://esg-el.de/thankyouContact'
    } catch (error) {
      success.value = false
      console.log('Fehler beim Versenden:', error)
    }
  }

  return { name, email, nachricht, success, senden }
}