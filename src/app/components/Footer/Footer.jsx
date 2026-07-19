import Link from 'next/link'
import Script from 'next/script'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.main}>
            <h1 className={styles.h1}>DEPDENAGENCY@GMAIL.COM</h1>
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
                    <Link href="https://t.me/ytskii1">Telegram</Link>
                    <Link href="">Instagram</Link>
                </div>
            </footer>
        </div>
    )
}

export default Footer
