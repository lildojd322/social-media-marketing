import styles from './BidsLoading.module.scss'

const BidsLoading = () => {
    return (
        <div className={styles.dashboardContainer}>

            <nav className={styles.navigation}>
                <div className={`${styles.navLink} ${styles.skeletonText}`} style={{ width: '130px' }}></div>
                <span className={styles.separator}>/</span>
                <div className={`${styles.navLink} ${styles.skeletonText}`} style={{ width: '60px' }}></div>
            </nav>


            <div className={`${styles.titleSkeleton} ${styles.skeletonText}`}></div>


            <ul className={styles.requestList}>
                {[1, 2, 3].map((i) => (
                    <li key={i} className={styles.requestCard}>
                        <div className={styles.requestHeader}>
                            <div className={`${styles.skeletonId} ${styles.skeletonText}`}></div>
                            <div className={`${styles.skeletonDate} ${styles.skeletonText}`}></div>
                            <div className={`${styles.skeletonName} ${styles.skeletonText}`}></div>
                            <div className={`${styles.skeletonEmail} ${styles.skeletonText}`}></div>
                        </div>
                        <div className={styles.messageBlock}>
                            <div className={`${styles.skeletonLine} ${styles.skeletonText}`}></div>
                            <div className={`${styles.skeletonLine} ${styles.skeletonText} ${styles.short}`}></div>
                        </div>
                        <div className={styles.actions}>
                            <div className={`${styles.skeletonButton} ${styles.skeletonText}`}></div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BidsLoading
