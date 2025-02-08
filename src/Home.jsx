import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Range from './components/Range'
import Products from './components/Products'
import Explore from './components/Explore'
import Furniture from './components/Furniture'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import Scrolltotop from './components/Scrolltotop'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Range />
      <Products />
      <Explore />
      <Furniture />
      <Footer />
      <Chatbot />
      <Scrolltotop />
    </div>
  )
}

export default Home
