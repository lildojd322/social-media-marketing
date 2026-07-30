'use client'

import { useEffect, useState } from 'react'
import styles from './AdminDashboard.module.scss'

const AdminDashboard = () => {
    const [bids, setBids] = useState([])
    const [currentBids, setCurrentBids] = useState('normal')

    const changeBidsState = () => {
        if (currentBids === 'normal') {
            setCurrentBids('archive')
        } else {
            setCurrentBids('normal')

        }
    }

    useEffect(() => {
        const fetchBids = async () => {
            try {
                const response = await fetch('/api/bids/get')
                const currentBids = await response.json()
                setBids(currentBids.bids)
            } catch (error) {
                console.error("api error", error)
            }
        }
        fetchBids()
    }, [])


    return (
        <div className={styles.dashboardContainer}>
            <nav className={styles.navigation}>
                <div onClick={changeBidsState}
                    className={`${styles.navLink} ${currentBids === 'normal' && styles.activeLink}`}

                >
                    Richieste correnti
                </div>
                <span className={styles.separator}>/</span>
                <div onClick={changeBidsState}
                    className={`${styles.navLink} ${currentBids === 'archive' && styles.activeLink}`}

                >
                    Archivio
                </div>
            </nav>

            <h2 className={styles.title}>Richieste non elaborate: 1</h2>
            <ul className={styles.requestList}>
                {bids.map((bid) => {
                    return <li key={bid.id} className={styles.requestCard}>
                        <div className={styles.requestHeader}>
                            <span className={styles.id}>{bid.id}</span>
                            <span className={styles.date}> {new Date(bid.created_at).toLocaleDateString('ru-RU')}</span>
                            <span className={styles.username}>{bid.name}</span>
                            <span className={styles.email}>{bid.email}</span>
                        </div>
                        <div className={styles.messageBlock}>
                            <p className={styles.messageText}>
                                {bid.message}
                            </p>
                        </div>
                        <div className={styles.actions}>
                            <button className={styles.elaborateButton}>Richiesta elaborata</button>
                        </div>
                    </li>
                })}

            </ul>
        </div>
    )
}

export default AdminDashboard
