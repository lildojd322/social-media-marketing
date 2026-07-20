import styles from './Projects.module.scss'
import zaglushka1 from '../../png/1c4db4d7e4b8e078619b9c0e9ed9ddd048efb791.png'
import zaglushka2 from '../../png/68cacd92820e04f4dcf2fa298509b537cfca6798.png'
import zaglushka3 from '../../png/3c8dff0180c8e6a7d68a9844c833646959311f2d.png'
import zaglushka4 from '../../png/03b7e6bf96ab4db81171fdccfc3e5596f374997d (1).png'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
    return (
        <div className={styles.container}>

            <span className={styles.hr}> </span>
            <div className={styles.main}>
                <header className={styles.header}>
                    <h2 className={styles.h2}>Progetti</h2>
                    <p className={styles.countProjects}>Oltre 500 progetti</p>
                </header>
                <ul className={styles.projects}>
                    <li className={styles.project}>
                        <Image className={styles.img} src={zaglushka1} alt="project img" />

                        <div className={styles.infoBlock} >
                            <p className={styles.date}>24 Giu 2024</p>
                            <Link href={''} className={styles.name}> Helyam Rebranding</Link>
                        </div>
                    </li>
                    <li className={styles.project}>
                        <Image className={styles.img} src={zaglushka2} alt="project img" />

                        <div className={styles.infoBlock} >
                            <p className={styles.date}>24 Ott 2024</p>
                            <Link href={''} className={styles.name}> Helyam Rebranding</Link>
                        </div>
                    </li>
                    <li className={styles.project}>
                        <Image className={styles.img} src={zaglushka3} alt="project img" />

                        <div className={styles.infoBlock} >
                            <p className={styles.date}>24 Gen 2024</p>
                            <Link href={''} className={styles.name}> Helyam Rebranding</Link>
                        </div>
                    </li>
                    <li className={styles.project}>
                        <Image className={styles.img} src={zaglushka4} alt="project img" />

                        <div className={styles.infoBlock} >
                            <p className={styles.date}> 24 Gen 2024</p>
                            <Link href={''} className={styles.name}> Helyam Rebranding</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Projects