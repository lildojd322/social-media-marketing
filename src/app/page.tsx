import Projects from './components/Projects/Projects'
import Header from './components/header/header'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Services />
    </div>
  )
}
