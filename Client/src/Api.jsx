import React, { useEffect, useState } from 'react'

const Api = () => {
    const[data, setData] = useState(null);
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/photos/1')
    .then((response)=>response.json())
    .then((json)=>setData(json))
}, [])
  return (
    <div>
       {data ?<>
       <h1>title:{data.title}</h1> 
       <img src={data.url} /></>
       : <h1>Loading.....</h1>
       
      } 
    </div>
  )
}

export default Api