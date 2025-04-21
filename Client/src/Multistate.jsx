import React, { useState } from 'react'

const Multistate = () => {
    
    const [state, setState] = useState(
        {
            count:0,
            text:"Vipul",
            Active:false
        }
    )
const countF = () =>{
    setState({...state,count:state.count+1})
}
const textF = () =>{
    setState({...state,text:"verma"})
}
const activeF = () =>{
    setState({...state,Active:!state.Active})
}
  return (
    <div><h1>Multistate</h1>
        <h4 >Count:{state.count}</h4>
        <h4 >Text:{state.text}</h4>
        <h4 >Active:{`${state.Active}`}</h4>
        <button onClick={countF}>Count</button>
        <button onClick={textF}>Text</button>
        <button onClick={activeF}>active</button>
    </div>
  )
}

export default Multistate