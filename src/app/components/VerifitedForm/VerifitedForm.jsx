'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"
import OtpInput from 'react-otp-input'
import styles from './VerifitedForm.module.scss'

const VerifitedForm = ({ email }) => {
    const router = useRouter()
    const [error, setError] = useState('')
    const [code, setCode] = useState('')
    const [isPending, setIsPending] = useState(false)

    const onSubmit = async (event) => {
        event.preventDefault()
        setError("")

        if (code.length !== 6) {
            setError("Inserisci tutte we 6 le cifre.")
            return
        }

        setIsPending(true)

        const response = await fetch(`/api/admin/VerifitedToken/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, code })
        })

        const data = await response.json()
        setIsPending(false)

        if (data.success) {
            router.push("/admin/dashboard")
        } else {
            setError(data.error || "Codice errato.")
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {error && <p className={styles.error}>{error}</p>}

                <form onSubmit={onSubmit} className={styles.form}>
                    <OtpInput
                        value={code}
                        onChange={setCode}
                        numInputs={6}
                        shouldAutoFocus={true}
                        inputType="tel"
                        renderSeparator={<div style={{ width: '6px' }}></div>}
                        containerClassName="js-otp-input-container"
                        renderInput={(props) => (
                            <input
                                {...props}
                                className={styles.input}
                            />
                        )}
                    />

                    <button
                        type="submit"
                        disabled={isPending}
                        className={styles.button}
                    >
                        {isPending ? "Invia..." : "Invia codice"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default VerifitedForm
