'use client'
import { useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import styles from './Footer.module.scss'
import Toast from '../Toast/Toast'


const Footer = () => {
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState('')
    const emailText = 'DEPDENAGENCY@GMAIL.COM'

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(emailText)

            setToastMessage('Copiato con successo!')
            setShowToast(true)

            setTimeout(() => {
                setShowToast(false)
            }, 3000)
        } catch (error) {
            setToastMessage('Errore durante la copia!')
            setShowToast(true)
            setTimeout(() => {
                setShowToast(false)
            }, 3000)
        }
    }

    return (
        <div className={styles.main}>
            <h1 className={styles.h1} onClick={handleCopy}>DEPDENAGENCY@GMAIL.COM</h1>
            <footer className={styles.footer}>
                <div className={styles.policy}>
                    <a
                        href="https://www.iubenda.com/privacy-policy/41209327"
                        className="iubenda-white iubenda-noiframe iubenda-embed"
                        title="Privacy Policy"
                        target="_blank"
                    >
                        Informativa sulla Privacy
                    </a>

                    <a
                        href="https://www.iubenda.com/privacy-policy/41209327/cookie-policy"
                        className="iubenda-white iubenda-noiframe iubenda-embed"
                        title="Cookie Policy"
                        target="_blank"
                    >
                        Informativa sui Cookie
                    </a>

                    <Script
                        id="iubenda-embed-script"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `
                                (function (w,d) {
                                    var loader = function () {
                                        var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; 
                                        s.src="https://cdn.iubenda.com/iubenda.js"; 
                                        tag.parentNode.insertBefore(s,tag);
                                    }; 
                                    if(w.addEventListener){w.addEventListener("load", loader, false);}
                                    else if(w.attachEvent){w.attachEvent("onload", loader);}
                                    else{w.onload = loader;}
                                })(window, document);
                            `
                        }}
                    />
                </div>
                <div className={styles.companyTag}>
                    © 2024 depden. Tutti i diritti riservati
                </div>
                <div className={styles.linksToMedia}>
                    <a href="https://t.me/ytskii1">Telegram</a>
                    <a href="https://www.instagram.com/depdenagency/">Instagram</a>
                </div>

            </footer>
            <Toast message={toastMessage} isOpen={showToast} />
        </div>
    )
}

export default Footer
