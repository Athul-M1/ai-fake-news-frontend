import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import LenisScroll from './components/LenisScroll'
import Footer from './components/Footer'
import Predict from './pages/Predict'
import { Route, Routes } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer } from "react-toastify"
import About from './pages/About'
import HowItWorks from './pages/HowItWorks'


const App = () => {
  return (
    <div>
      <ToastContainer />
      <LenisScroll />
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/predict' element={<Predict/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/how-it-works' element={<HowItWorks/>}/>

        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
