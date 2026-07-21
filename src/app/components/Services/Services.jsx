import styles from './Services.module.scss'

const Services = () => {
    return (
        <div id="services" className={styles.main}>
            <header className={styles.header}>
                <h2 className={styles.h2}>//SERVIZI</h2>
                <h1 className={styles.h1}>
                    Il content che cattura l'attenzione, la strategia che porta conversioni.
                </h1>
            </header>
            <ul className={styles.servicesList}>
                <li className={styles.servicesItem}>
                    <span className={styles.servicesCounter}>/01</span>
                    <h1 className={styles.servicesName}>Social Media</h1>
                    <h2 className={styles.servicesSlogan}>Costruiamo una presenza che ispira fiducia.</h2>
                    <p className={styles.servicesDescription}>Gestiamo i tuoi social con strategie, contenuti e pubblicazioni pensati per far crescere il tuo brand.</p>
                </li>
                <li className={styles.servicesItem}>
                    <span className={styles.servicesCounter}>/02</span>
                    <h1 className={styles.servicesName}>Content Creation</h1>
                    <h2 className={styles.servicesSlogan}>Contenuti che attirano attenzione.</h2>
                    <p className={styles.servicesDescription}>Produciamo foto, video e contenuti creativi pensati per coinvolgere il pubblico e valorizzare il tuo brand.</p>
                </li>
                <li className={styles.servicesItem}>
                    <span className={styles.servicesCounter}>/03</span>
                    <h1 className={styles.servicesName}>Marketing</h1>
                    <h2 className={styles.servicesSlogan}>Più visibilità, più clienti.</h2>
                    <p className={styles.servicesDescription}>Realizziamo strategie digitali e campagne pubblicitarie orientate alla crescita del tuo business.</p>
                </li>


                <li className={styles.servicesItem}>
                    <span className={styles.servicesCounter}>/04</span>
                    <h1 className={styles.servicesName}>Branding</h1>
                    <h2 className={styles.servicesSlogan}>Un'identità che lascia il segno.</h2>
                    <p className={styles.servicesDescription}>Creiamo loghi, identità visive e linee guida che rendono il tuo marchio riconoscibile.</p>
                </li>
                <li className={styles.servicesItem}>
                    <span className={styles.servicesCounter}>/05</span>
                    <h1 className={styles.servicesName}>Siti Web</h1>
                    <h2 className={styles.servicesSlogan}>Il tuo business merita un sito che converte.</h2>
                    <p className={styles.servicesDescription}>Progettiamo e sviluppiamo siti web moderni, veloci e ottimizzati per trasformare i visitatori in clienti.
                    </p>
                </li>
                <li className={styles.servicesItem}>
                    <span className={styles.servicesCounter}>/06</span>
                    <h1 className={styles.servicesName}>AI Automations</h1>
                    <h2 className={styles.servicesSlogan}>Lavora meno. Ottieni di più.</h2>
                    <p className={styles.servicesDescription}>Automatizziamo attività ripetitive con strumenti di intelligenza artificiale per migliorare produttività ed efficienza.</p>
                </li>
            </ul>
        </div>
    )
}

export default Services