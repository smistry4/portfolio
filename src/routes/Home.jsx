import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Background from '../components/Background'
import Project from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Background />
      <Skills />
      <Project />
      <Contact />
    </div>
  )
}

export default Home