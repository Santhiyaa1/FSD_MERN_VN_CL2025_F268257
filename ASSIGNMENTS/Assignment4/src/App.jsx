import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import AboutPage from './components/About/AboutPage.jsx'
import Departments from './components/Departments/Departments.jsx'
import ContactUs from './components/ContactUS/ContactUs.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutPage/>
      <Departments/>
      <ContactUs/>

    </div>
  )
}

export default App
