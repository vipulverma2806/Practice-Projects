import React, { useReducer } from 'react'

const CountRedu = () => {


const countF = (state, act) =>{
    switch(act.type){
        case 'INCREMENT':
            return {count: state.count + 1}
        case 'RESET':
            return {count: 0}
        case 'DECREMENT':
            return {count: state.count - 1}    
    }
    

}
const [state, clicked] = useReducer(countF, {count:0})

  return (
    <div>Counter Using useReducer   
        <div>{state.count}</div>
        <button onClick={()=> clicked({type:'INCREMENT'})}>+</button>
        <button onClick={()=> clicked({type:'RESET'})}>Reset</button>
        <button onClick={()=> clicked({type:'DECREMENT'})}>-</button>
        

    </div>
  )
}

export default CountRedu