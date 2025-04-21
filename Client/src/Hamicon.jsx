import React, { useState } from 'react'
import './styles/Hamicon.css'

const Hamicon = () => {
    const[onOff, setOnOff] =useState(false)
    const clicked = () =>{
        setOnOff(!onOff)
    }
    console.log()
  return (
    <div>Hamicon
        <button onClick={clicked}>☰</button>
        <ul className={`menu ${onOff? "true": ""}`}>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
        </ul>

    </div>
  )
}

export default Hamicon