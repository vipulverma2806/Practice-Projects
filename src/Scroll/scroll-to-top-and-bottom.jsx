import React, { useRef } from 'react'
import useFetch from '../CustomHooks/Usefetch';


const ScrollToTopAndBottom = () => {
    const {data, error, pending} = useFetch('https://dummyjson.com/products',{})
    const BottomRef = useRef(null);
    const toBottom = ()=>{
        BottomRef.current.scrollIntoView();
    }
    const toTop = ()=>{
        window.scrollTo({
            top:0
        })
    }
  return (
    <div><h1>scroll-to-top-and-bottom</h1>
        <button onClick={toBottom}>Go to Bottom</button>
         <h1>This is top</h1>
         {data && data.products && data.products.length ? data.products.map((item)=> <li>{item.title}</li>) : null}
         <h1 ref={BottomRef}>This is bottom</h1>
         <button onClick={toTop}>Go to Top</button>
    </div>
   
  )
}

export default ScrollToTopAndBottom