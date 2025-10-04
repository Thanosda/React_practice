import { useState } from 'react'

import './App.css'
import List from './List'

function App(props) {
  
const Fruits = [
    { id: 1, name: "apple", health: 67 },
    { id: 2, name: "Watermelon", health: 37 },
    { id: 3, name: "Orange", health: 47 },
    { id: 4, name: "Berry", health: 57 },
  ];
const vegies = [
    { id: 1, name: "apple", health: 67 },
    { id: 2, name: "Watermelon", health: 37 },
    { id: 3, name: "Orange", health: 47 },
    { id: 4, name: "Berry", health: 57 },
  ];
  return (
    <>
      <List items={Fruits} cata="fruits" />
      <List items={vegies} cata="vegitabels" />
    </>
  )
}

export default App
