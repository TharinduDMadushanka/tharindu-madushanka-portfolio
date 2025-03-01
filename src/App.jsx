import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Service from './components/Service/Service'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import MyServices from './components/MyServices/MyServices'
import Certificates from './components/Certificates/Certificates'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Service/>
      <About/>
      <Projects/>
      <MyServices/>
      <Certificates/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
