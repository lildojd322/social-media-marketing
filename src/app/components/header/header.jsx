import styles from './header.module.scss'

const Header = () => {
    return (
        <div className={styles.main}>
            <h1 className={styles.h1}>
               D-E-P STUDIO
            </h1>

            <input className={styles.checkbox} type="checkbox" id="burger" />

            <label htmlFor="burger" className={styles.burgerLabel}>
                <span className={styles.span}></span>
                <span className={styles.span}></span>
                <span className={styles.span}></span>
                <span className={styles.span}></span>
                <span className={styles.span}></span>

            </label>

            <div className={ styles.burgerNav }>
            
            </div>


        </div>
    )
}

export default Header