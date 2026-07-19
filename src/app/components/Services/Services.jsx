import styles from './Services.module.scss'

const Services = () => {
    return (
        <div className={styles.main}>
            <header className={styles.header}>
                <h2 className={styles.h2}>//SERVIZI</h2>
                <h1 className={styles.h1}>
                    Il content che cattura l'attenzione, la strategia che porta conversioni.
                </h1>
            </header>
            <ul className={styles.servicesList}>
                <li className={styles.servicesItem}>
                    <span className={styles.servicesCounter}>/01</span>
                    <h1 className={styles.servicesName}>Progettazione dell'esperienza utente</h1>
                    <h2 className={styles.servicesSlogan}>Eleva il tuo stile</h2>
                    <p className={styles.servicesDescription}>Trasforma il tuo sito web in una piattaforma intuitiva e visivamente accattivante grazie alla nostra competenza nel UX design.</p>
                </li>
                <li className={styles.servicesItem}>
                    <span className={styles.servicesCounter}>/02</span>
                    <h1 className={styles.servicesName}>Progettazione dell'esperienza utente</h1>
                    <h2 className={styles.servicesSlogan}>Eleva il tuo stile</h2>
                    <p className={styles.servicesDescription}>Trasforma il tuo sito web in una piattaforma intuitiva e visivamente accattivante grazie alla nostra competenza nel UX design.</p>
                </li>
                <li className={styles.servicesItem}>
                    <span className={styles.servicesCounter}>/03</span>
                    <h1 className={styles.servicesName}>Progettazione dell'esperienza utente</h1>
                    <h2 className={styles.servicesSlogan}>Eleva il tuo stile</h2>
                    <p className={styles.servicesDescription}>Trasforma il tuo sito web in una piattaforma intuitiva e visivamente accattivante grazie alla nostra competenza nel UX design.</p>
                </li>


                <li className={styles.servicesItem}>
                    <span className={styles.servicesCounter}>/04</span>
                    <h1 className={styles.servicesName}>Progettazione dell'esperienza utente</h1>
                    <h2 className={styles.servicesSlogan}>Eleva il tuo stile</h2>
                    <p className={styles.servicesDescription}>Trasforma il tuo sito web in una piattaforma intuitiva e visivamente accattivante grazie alla nostra competenza nel UX design.</p>
                </li>
                <li className={styles.servicesItem}>
                    <span className={styles.servicesCounter}>/05</span>
                    <h1 className={styles.servicesName}>Progettazione dell'esperienza utente</h1>
                    <h2 className={styles.servicesSlogan}>Eleva il tuo stile</h2>
                    <p className={styles.servicesDescription}>Trasforma il tuo sito web in una piattaforma intuitiva e visivamente accattivante grazie alla nostra competenza nel UX design.</p>
                </li>
                <li className={styles.servicesItem}>
                    <span className={styles.servicesCounter}>/06</span>
                    <h1 className={styles.servicesName}>Progettazione dell'esperienza utente</h1>
                    <h2 className={styles.servicesSlogan}>Eleva il tuo stile</h2>
                    <p className={styles.servicesDescription}>Trasforma il tuo sito web in una piattaforma intuitiva e visivamente accattivante grazie alla nostra competenza nel UX design.</p>
                </li>
            </ul>
        </div>
    )
}

export default Services