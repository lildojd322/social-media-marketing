import styles from './Toast.module.scss'

const Toast = (props) => {
    const { message, isOpen } = props

    return (

        <div className={`${styles.toastContainer} ${isOpen ? styles.visible : ''}`}>
            <div className={styles.toastBody}>
                {message}
            </div>
        </div>
    )
}

export default Toast