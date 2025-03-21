import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

const Home: React.FC = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Footer />
    </div>
  )
}

export default Home