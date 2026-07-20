'use client'

import { useState } from 'react'
import styles from './header.module.scss'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <div className={styles.main}>
            <h1 className={styles.h1}>
                DEPDEN AGENCY
            </h1>
            <ul className={styles.linksList}>
                <li className={styles.linksListItem}>
                    <a href="#projects">Progetti</a>
                </li>
                <li className={styles.linksListItem}>
                    <a href="#services">Servizi</a>
                </li>
                <li className={styles.linksListItem}>
                    <a href="#contactus">Contattaci</a>
                </li>
            </ul>

            <div>
                <input checked={isMenuOpen} onChange={(e) => setIsMenuOpen(e.target.checked)} type="checkbox" id='burger' name='burger' className={styles.checkbox} />
                <label htmlFor="burger" className={styles.burgerLabel}>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <div className={styles.burgerNav}>
                    <ul className={styles.burgerLinkList}>
                        <li className={styles.burgerLink}>
                            <a onClick={closeMenu} href="#projects">Progetti</a>
                        </li>
                        <li className={styles.burgerLink}>
                            <a onClick={closeMenu} href="#services">Servizi</a>
                        </li>
                        <li className={styles.burgerLink}>
                            <a onClick={closeMenu} href="#contactus">Contattaci</a>
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Header