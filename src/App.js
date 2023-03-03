import React from 'react'
import Home from './component/home/Home'
import Navbar from './component/navbar/Navbar'
import About from './component/about/About'
import Skills from './component/skills/Skills'
import Contact from './component/contact/Contact'

const App = () => {
  
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
    </>
  )
}

export default App