'use client'
import { use, useState } from 'react'
import styles from './AdminForm.module.scss'
import { adminSchema } from '../../../lib/zod'
import { useRouter } from 'next/navigation'

const AdminForm = () => {
    const router = useRouter()

    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState('')

    const hadleAction = async (event) => {
        event.preventDefault()
        setIsPending(true)

        const formData = new FormData(event.currentTarget)
        const data = Object.fromEntries(formData)

        const validation = adminSchema.safeParse(data)

        if (!validation.success) {
            const firstError = validation.error.issues[0].message
            setError(firstError)
            setIsPending(false)
            return
        }

        const response = await fetch('/api/admin/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(validation.data)
        })
        if (!response.ok) {
            const result = await response.json()
            setError(result.error || 'Registration failed')

        }
        
        setIsPending(false)
        setError('')
        event.target.reset()
        router.push('/admin/dashboard')
    }

    return (
        <div className={styles.main}>
            <form onSubmit={hadleAction} className={styles.form} >
                <input type="email" id="email" name="email" placeholder="email" />
                <input type="password" id="password" name="password" placeholder="password" />
                <button className={`${styles.sendButton} ${isPending && styles.loading} `}>

                    <span className={styles.textIntoButton}>confermare</span>
                    <span className={styles.spinner}></span>
                </button>
                {error && <p style={{ color: 'rgb(206, 54, 54)' }}>{error}</p>}

            </form>
        </div>
    )
}

export default AdminForm