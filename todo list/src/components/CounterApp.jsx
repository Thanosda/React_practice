import React, { useState } from 'react'

const CounterApp = () => {
 let [count,setCount]=useState(0)
   function HandleInce(){
   setCount(count+1)
}

function HandleDecr(){
      setCount(count-1)

   }


  return (
    <div> 
        <h2>  counter App={count}</h2>
        <button onClick={HandleInce}>Increase</button>
        <button onClick={HandleDecr}>Decrease</button>
    </div>
  )
}

export default CounterApp