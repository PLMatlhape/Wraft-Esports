import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Games from './components/Games'
import Tournaments from './components/Tournaments'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Games />
        <Tournaments />
      </main>
      <Footer />
    </>
  )
}
