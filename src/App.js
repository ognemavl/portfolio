import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Work from './components/Work'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <Work />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
