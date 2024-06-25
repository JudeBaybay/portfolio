import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import'./App.css'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Qualifications from './Components/Qualifications/Qualifications'
import Services from './Components/Services/Services'
import Work from './Components/Work/Work'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  const top = () =>{
    window.scrollTo(0,0);
  }
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Qualifications/>
      <Services/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App