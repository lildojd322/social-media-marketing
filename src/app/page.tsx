import Projects from './components/Projects/Projects'
import Header from './components/header/header'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Instruments from './components/Instruments/Instruments'
import ContactUs from './components/ContactUs/ContactUs'
import ContactForm from './components/ContactForm/ContactForm'
import Footer from './components/Footer/Footer'
import styles from './page.module.scss'
import { cookies } from 'next/headers'


export default async function Home() {

  const cookiesStore = await cookies()
  const adminCookie = cookiesStore.get('admin_session')?.value

  return (
    <div className={styles.main} >
      <Header adminCookie={adminCookie} />
      <Hero />
      <Projects />
      <Services />
      <Instruments />
      <ContactUs />
      <ContactForm />
      <Footer />
    </div>
  )
}
