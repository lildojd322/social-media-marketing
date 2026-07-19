import Link from 'next/link'

import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.main} >
            <h1 className={styles.h1} >HELLO@STUDIOX.CO</h1>
            <footer  className={styles.footer}>
                <div  className={styles.policy}>
                    <Link href={''}>Privacy Policy      </Link>
                    <Link href={''}>  Terms of Use</Link>
                </div>
                <div  className={styles.companyTag}> 
                    © 2024 depden. Tutti i diritti riservati
                </div>
                <div  className={styles.linksToMedia}>
                    <Link href={''}>Telegram</Link>
                    <Link href={''}>Instagram</Link>
                </div>

            </footer>
        </div>
    )
}

export default Footer