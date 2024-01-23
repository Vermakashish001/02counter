import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() { 

  const [counter,setCounter] = useState(0)
  //let counter = 15

  const AddValue = () => {
    // console.log("value added",Math.random());
    // counter = counter+1
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }
  const RemoveValue = () => {
    // counter = counter-1
    setCounter(counter -1)
  }
  return (
    <>
      <h1>React journey </h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={AddValue}> AddValue {counter}</button>
      <br />
      <button onClick={RemoveValue}> RemoveValue {counter}</button>
      
    </>
  )
}

export default App
