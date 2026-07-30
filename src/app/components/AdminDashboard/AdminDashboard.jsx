'use client'
import SubmitButton from '../SubmitButton/SubmitButton'
import { useEffect, useState } from 'react'
import styles from './AdminDashboard.module.scss'
import BidsLoading from '../BidsLoading/BidsLoading'


const AdminDashboard = () => {
    const [bids, setBids] = useState([])
    const [currentBids, setCurrentBids] = useState('normal')
    const [bidsCount, setBidsCount] = useState(0)
    const [error, setError] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [loading, setLoading] = useState(true)

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
                setBids(currentBids.bids || [])
                setBidsCount(currentBids.activeCount)

            } catch (error) {
                console.error("api error", error)
                setBids([])
            }
            finally {
                setLoading(false)
            }
        }
        fetchBids()

    }, [])


    const handleClick = async (id) => {
        try {
            setIsSubmitting(id)
            setError(null)
            const response = await fetch(`/api/bids/update?id=${id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            })
            const data = await response.json()

            if (!response.ok || !data.success) {
                setIsSubmitting(false)

                setError(data.error)
                return
            }
            setBidsCount(prev => prev - 1)


            setBids(prevBids =>
                prevBids.map(bid =>
                    bid.id === id ? { ...bid, is_archived: 1 } : bid
                )
            )
            setIsSubmitting(false)

        } catch (error) {
            setIsSubmitting(false)

            setError(error.message)
        }

    }
    const filteredBids = bids.filter((bid) => {
        if (currentBids === 'normal') {
            return !bid.is_archived
        }
        return bid.is_archived
    })


    return (

        <>
            {loading ? <BidsLoading /> : <div className={styles.dashboardContainer}>
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

                <h2 className={styles.title}>Richieste non elaborate: {bidsCount}</h2>
                <ul className={styles.requestList}>
                    {filteredBids && filteredBids.length > 0 ? filteredBids.map((bid) => {
                        return <li key={bid.id} className={`${styles.requestCard} ${bid.is_archived && styles.archivedCard}`}>
                            <div className={styles.requestHeader}>
                                <span className={styles.id}>№{bid.id}</span>
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
                                <SubmitButton isSubmitting={isSubmitting === bid.id} onClick={() => {
                                    handleClick(bid.id)
                                }} className={styles.elaborateButton}>Richiesta elaborata</SubmitButton>
                            </div>
                        </li>
                    }) : <p className={styles.noRequestBlock}> No active requests</p>}


                </ul>
            </div>}


        </>
    )
}

export default AdminDashboard
