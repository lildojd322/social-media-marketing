import styles from './ContactForm.module.scss'

const ContactForm = () => {
    return (
        <div className={styles.main} >

            <form className={styles.form} action="">

                <input className={styles.nameInput} type="text" placeholder="Nome" />
                <input className={styles.emailInput} type="email" placeholder="Email" />
                <input className={styles.messageInput} type="text" placeholder="Messaggio" />
                <button className={styles.sendButton}>
                    <span className={styles.textIntoButton}>Invia</span>
                    <div className={styles.stripesIntoButton}>
                        <span className={styles.strip}></span>
                        <span className={styles.strip}></span>
                        <span className={styles.strip}></span>
                        <span className={styles.strip}></span>
                        <span className={styles.strip}></span>
                    </div>
                </button>

            </form>
            
        </div>
    )
}

export default ContactForm