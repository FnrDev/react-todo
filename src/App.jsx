import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='continer'>
      <h1>
        Total Counts:
        <span className='count-number'>{count}</span>
      </h1>
      <button className='increase-btn' onClick={() => setCount(count + 1)}>Increase</button>
      <button className='undo-btn' onClick={() => {
        if (count <= 0) return;
        setCount(count - 1)
      }}>Undo</button>
      <button className='reset-btn' onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}