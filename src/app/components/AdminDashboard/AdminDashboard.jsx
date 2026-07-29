import styles from './AdminDashboard.module.scss'

const AdminDashboard = () => {
    return (
        <div className={styles.dashboardContainer}>
          <nav className={styles.navigation}>
            <div 
                className={`${styles.navLink}`}
                
            >
                Richieste correnti
            </div>
            <span className={styles.separator}>/</span>
            <div 
                className={styles.navLink}
        
            >
                Archivio
            </div>
        </nav>

            <h2 className={styles.title}>Richieste non elaborate: 1</h2>
            <ul className={styles.requestList}>
                <li className={styles.requestCard}>
                    <div className={styles.requestHeader}>
                        <span className={styles.id}>№1</span>
                        <span className={styles.username}>username</span>
                        <span className={styles.email}>email@gmail.com</span>
                    </div>
                    <div className={styles.messageBlock}>
                        <p className={styles.messageText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            I nostri clienti non sono semplici committenti.
                        </p>
                    </div>
                    <div className={styles.actions}>
                        <button className={styles.elaborateButton}>Richiesta elaborata</button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default AdminDashboard
