import icon from '../../icons/norequests.png'
import styles from './noContentMessage.module.scss'

const NoContentMessage = ({ children }) => {
    return (
        <div className={styles.noRequestBlock}>
            <img src={icon.src} width={250} height={250} alt="no requests" />
            <p className={styles.noRequestText}> {children}</p>
        </div>
    )
}

export default NoContentMessage