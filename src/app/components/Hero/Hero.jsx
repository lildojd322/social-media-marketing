import styles from './Hero.module.scss'

const Hero = () => {
    return (
        <div className={styles.main}>
            <h1 className={styles.h1}>
                Portiamo nuovi clienti alla tua attività locale
            </h1>
            <p className={styles.rightText}>
                Creiamo brand solidi e di impatto per il mercato di Milano.
            </p>
        </div>
    )
}

export default Hero