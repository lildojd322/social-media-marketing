'use client'
import { bidSchema } from '../../../lib/zod'
import { useState } from 'react'
import styles from './ContactForm.module.scss'
import Toast from '../Toast/Toast'

const ContactForm = () => {

    const [message, setMessage] = useState('')
    const [showToast, setShowToast] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isSubmiting, setIsSubmiting] = useState(false)

    const handleSubmit = async (event) => {

        event.preventDefault()
        setIsSubmiting(true)
        setShowToast(false)

        const formElement = event.currentTarget
        const formData = new FormData(formElement)
        const data = Object.fromEntries(formData.entries())
        const validation = bidSchema.safeParse(data)


        if (!validation.success) {
            setMessage(validation.error.issues[0].message)
            setIsError(true)
            setShowToast(true)
            return
            setIsSubmiting(false)
        }

        const { email, name, message: userMessage } = validation.data

        try {
            const response = await fetch('/api/send-lead/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, name, message: userMessage })
            })

            const resData = await response.json()

            if (!response.ok || !resData.success) {
                setMessage(resData.error || "Si è verificato un errore. Riprova più tardi.")
                setIsError(true)
                setShowToast(true)
                setIsSubmiting(false)
                return
            }

            setMessage('La tua richiesta è stata inviata!')
            setIsError(false)
            setShowToast(true)
            setIsSubmiting(false)
            formElement.reset()

        } catch (err) {
            setMessage("Errore di connessione. Controlla la tua rete.")
            setIsError(true)
            setIsSubmiting(false)
            setShowToast(true)
        }
    }

    return (
        <div className={styles.main}>
            <form onSubmit={handleSubmit} className={styles.form} action="">
                <input className={styles.nameInput} id="name" name="name" type="text" placeholder="Nome" />
                <input className={styles.emailInput} id="email" name="email" type="email" placeholder="Email" />
                <input className={styles.messageInput} id="message" name="message" type="text" placeholder="Messaggio" />
                <button className={`${styles.sendButton} ${isSubmiting && styles.disabled}`} disabled={isSubmiting}>
                    <span className={styles.textIntoButton}>Invia</span>
                </button>
            </form>

            <p className={`${styles.error} ${isError && showToast ? styles.visible : ''}`}>
                {message}
            </p>
            <Toast
                isOpen={showToast && !isError}
                isError={false}
                message={message}
                onClose={() => setShowToast(false)}
            />



        </div>
    )
}

export default ContactForm
