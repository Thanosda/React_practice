import React, { useState } from 'react'
import styled from 'styled-components'
 
const Button = styled.button`
  width: 110px;
  height: 30px;
  background-color: blue;
  color: white;
`;

const CounterApp = () => {
 let [count,setCount]=useState(0)
   function HandleInce(){
   
   setCount((count)=>{return count+ 1})
}
 let message;
 const remainingClicks=10-count
function HandleDecr(){
      setCount((count)=>{return count-1})

   }
  if (count < 10) {
    message=(<div>
      <h3>you Clicked {count}times</h3>
   
     <p>you have {remainingClicks} you have</p>
     </div>)
  } else if (count === 10) {
    message=(<div>
      <h3>you Clicked {count}times</h3>
   
     <p>You have recevied the 10% reward</p>
     </div>)}
  else if (count > 10) {
    message=(<div>
      <h3>you Clicked {count}times</h3>
   
     <p>You have recevied the Master reward</p>
</div>)}

  return (
    <div> 
        <h2>  Unlock the gift 💕 {count}</h2>
       
        <Button onClick={HandleInce}>Click ME</Button>
{/*         {count>=10? (<h3>you unlocked the reward</h3>):(<h2>you have to click more</h2>)} */}
    {message}
    </div>
  )
}

export default CounterApp