import React from 'react'
import Header from './components/Header'
import Hero from './sections/Hero'
import Services from './sections/Services'
import CaseStudies from './sections/CaseStudies'
import WorkingProcess from './sections/WorkingProcess'
import Team from './sections/Team'
import Testimonials from './sections/Testimonials'
import CTA from './sections/CTA'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900">
      <Header />
      <Hero />
      <Services />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
