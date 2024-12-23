import React, { useEffect, useState } from 'react'

const Three = () => {
    const [count, setCount] = useState(60);
    useEffect(()=>{
        if(count>0){
            let timer = setTimeout(() => {
                setCount(count-1)
            }, 1000);
        }}
    )
  return (
    <div>Timer:{count}</div>
  )
}

export default Three