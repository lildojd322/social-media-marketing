import styles from './SubmitButton.module.scss'

const SubmitButton = ({ children, isSubmitting, onClick}) => {
    return (
        <button onClick={onClick} className={`${styles.sendButton} ${isSubmitting ? styles.loading : ''}`} disabled={isSubmitting}>
            <span className={styles.textIntoButton}> {children}</span>
            <span className={styles.spinner}></span>
        </button>

    )
}

export default SubmitButton