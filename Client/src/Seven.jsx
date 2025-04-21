import React, { useState } from 'react'

const Seven = () => {
    const [inn, setIn] = useState();
    const ini=(e)=>{
        setIn(e.target.value);
    }
  return (
    <div>
        <input type="text" onChange={ini} />
        <h3>User Input:{inn}</h3>
    </div>
  )
}

export default Seven