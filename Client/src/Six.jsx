import React from 'react'
import { useState } from 'react'
const Six = () => {
    const [file, setfile] = useState(null);
    const selectFile = (e) =>{
        setfile(e.target.files[0]);
    }
  return (
    <div>
        <input type="file" accept='image/*' onChange={selectFile} />
       {file && <img src={URL.createObjectURL(file)}  />}

    </div>
  )
}

export default Six