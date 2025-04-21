import React from 'react'

const Two = () => {
    const items = ["q","w","e","t"];
  return (
    <>
    <ul>
        {items.map((item, index)=>{
            return <li key={index}>{item}</li>
        })}
    </ul>
    </>
  )
}

export default Two