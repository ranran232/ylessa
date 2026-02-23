import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyWorkWithMe from './components/WhyWorkWithMe'
import About from './components/About'
import Contact from './components/Contacts'

const page = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <WhyWorkWithMe/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default page