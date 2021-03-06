import React from 'react'
import AboutUs from '../components/AboutUs'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Pricing from '../components/Pricing'
import Services from '../components/Services'
import Team from '../components/Team'

const index = () => {
  return (
    <div className='scroll-smooth'>
      <HeroSection />
      <AboutUs />
      <Services />
      <Pricing />
      <Team />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default index
