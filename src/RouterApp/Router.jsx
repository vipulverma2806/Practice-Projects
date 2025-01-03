import React from 'react'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import { Link, Routes, Route } from 'react-router-dom'
const Router = () => {
  return (
    <div>Router
        <nav>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/home">Home</Link>
        </nav>
        <Routes>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
        </Routes>
    </div>
  )
}

export default Router