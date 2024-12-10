import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Team from './pages/Team'
import WhyUs from './pages/WhyUs'
import Error from './pages/Error'



const App = () => {
  return (
    <div>
      <Router>
        <Header />
        
        <Routes>
          <Route path='/' element ={<Home />} />
          <Route path='/about' element ={<About />} />
          <Route path='/services' element ={<Services />} />
          <Route path='/team' element ={<Team />} />
          <Route path='/whyus' element ={<WhyUs />} />
          <Route path='/error' element ={<Error />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App