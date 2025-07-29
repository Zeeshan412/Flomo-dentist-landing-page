import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/Aboutus.jsx'
import Footer from './components/Footer.jsx'
import Services from './components/Services.jsx'
import Homepage from './components/Homepage.jsx'

export const App = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16 md:pt-0">
        <Homepage />
        <Hero />
        <About />
        <Services />
        <Footer />
      </div>
    </div>
  )
}

export default App
