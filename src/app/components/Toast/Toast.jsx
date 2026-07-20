'use client'

import { useEffect } from 'react'
import styles from './Toast.module.scss'

const Toast = (props) => {
    const { message, isOpen, onClose, isError } = props

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                if (onClose) onClose()
            }, 3000)

            return () => clearTimeout(timer)
        }
    }, [isOpen, onClose])

    return (
        <div className={`${styles.toastContainer} ${isOpen ? styles.visible : ''} ${isError ? styles.error : ''}`}>
            <div className={styles.toastBody}>
                {message}
            </div>
        </div>
    )
}

export default Toast
