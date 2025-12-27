import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <NavBar/>
      <Hero/>
      <Services/>
      <Reviews/>
      <Footer/>
    </>
  )
}

export default App
