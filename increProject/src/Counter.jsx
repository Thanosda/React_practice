import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // state inside component

  function Increment() {
    setCount(count + 1);
  }

  function Decrement() {
    setCount(count - 1);
  }

  function Reset() {
    setCount(0);
  }

  return (
    <>
      <h1>Increment Decrement Game</h1>
      <h2>Count: {count}</h2>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </>
  );
}

export default Counter;
