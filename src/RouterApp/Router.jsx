import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const Router = () => {
  return (
    <div>Router
       <nav>
        <Link to="\about">About</Link>
        <Link to="\home">Home</Link>
        <Link to="\contact">Contact</Link>
       </nav>
       <Router>
        <Route path="\about" element={<About/>}></Route>
        <Route path="\home" element={<Home/>}></Route>
        <Route path="\contact" element={<Contact/>}></Route>
       </Router>
    </div>
  )
}

export default Router