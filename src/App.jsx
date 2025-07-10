import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Reviews from './components/Reviews'
import Contactus from './components/Contactus'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='overflow-x-hidden antialiased text-nutral-800'>
      <NavBar />
      <Hero />
      <Services/>
      <Portfolio/>
      <About />
      <Reviews />
      <Contactus />
      <Footer />
    </main>
  )
}

export default App