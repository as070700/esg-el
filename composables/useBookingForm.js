import { ref } from 'vue'
import emailjs from 'emailjs-com'

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
    const templateParams = {
      name: name.value,
      surname: surname.value,
      phone: phone.value,
      serviceType: serviceType.value,
      email: email.value,
      date: date.value
    }
    try {
      const result = await emailjs.send(
        'service_0cd3n84',
        'template_ptsnr1o',
        templateParams,
        'm53rYLIbykizSlLjU'
      )
      console.log(result)
      success.value = true
      window.location.href = 'https://esg-el.de/thankyouBooking'
    } catch (error) {
      success.value = false
      console.log('Fehler beim Versenden:', error)
    }
  }

  return { name, surname, email, phone, date, serviceType, terms, success, senden }
}



