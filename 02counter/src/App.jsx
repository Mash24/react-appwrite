import { useState } from 'react'

import './App.css'

function App() {

  const [Counter,setCounter]=useState(5); // 5 is the initial value of the counter

  // let Counter = 6;

  const addValue = () => {
    setCounter(Counter + 1);  
  }
  const removeValue = () =>{
    setCounter(Counter - 1);
  }

  // const [count, setCount] = useState(0)

  return (
    <>
     <h1>React Course with Me {Counter} </h1>
     <h2>Counter value: {Counter}</h2>
     <button onClick = {addValue}>Add Value</button> {" "}
      <button onClick = {removeValue} >Remove Value</button>
      <p>footer: {Counter} </p>
    </>
  )
}

export default App
