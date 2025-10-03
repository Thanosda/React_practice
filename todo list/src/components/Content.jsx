import React from 'react';
import styled from 'styled-components';
import CounterApp from './CounterApp';

// styled-components should be defined outside the component
const Button = styled.button`
  background-color: gold;
  color: white;
  height: 35px;
  width: 80px;   /* 20px is too small, changed to 80px */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
  background-color: darkorange;
  color: black;
}

`;

const Butt = styled(Button)`
  background-color: grey;
`;

const Content = () => {
  let bgcol = {
    backgroundColor: "green",
    color: "white",
    padding: "10px"
  };
  let user="know"
    
  function Hellosome1(e){
   user="raguu"
   console.log(user);
    
  }

   function Hellosome(event){
   user="muru"
   console.log(user);
   
  
  }

  return (
    <main>
      <h1 style={bgcol}>Main content -{user}</h1>
  <Button onClick={(e)=>{Hellosome1(e)}}>me</Button>  
  <Butt onClick={Hellosome}>mee</Butt>
  <CounterApp/>
    </main>
  );
};

export default Content;
