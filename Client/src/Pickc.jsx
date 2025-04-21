import React, { useState } from 'react'

const Pickc = () => {
    const [color,setColor] = useState("#186478")
    const picked = (e) =>{
        setColor(e.target.value)
    }

  return (
    <div>Pickc
        <input type="color" onChange={picked} />
        <div style={{width:"100px" , height:"100px", backgroundColor:color }}></div>
    </div>
  )
}

export default Pickc