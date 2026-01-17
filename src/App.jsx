import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import LenisScroll from './components/LenisScroll'
import Footer from './components/Footer'
import Predict from './pages/Predict'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <LenisScroll />
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/predict' element={<Predict/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
