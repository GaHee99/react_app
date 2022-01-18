import Button from './Button'
import styles from './App.module.css'
import { useState, useEffect } from 'react'

function App() {
  const [counter, setValue] = useState(0)
  const onClick = () => setValue((prev) => prev + 1)
  console.log('i run all the time')
  const iRunOnlyOnce = () => {
    console.log('i run only once')
  }
  useEffect(iRunOnlyOnce, [])
  return (
    <div>
      <input type="text" placeholder="Searct here... " />
      <h1>{counter} </h1>
      <button onClick={onClick}>Click me</button>
    </div>
  )
}

export default App
