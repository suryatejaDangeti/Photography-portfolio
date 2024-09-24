import React, { useState } from 'react'
import './Counter.css'

export default function Counter() {

    const [value, setValue] = useState(0);
    const incrementFunction = () => {
        setValue(value + 1)
    }
    const decrementFunction = () => {
        if(value > 0) {
            setValue(value - 1)
        }
    }
    const resetFunction = () => {
            setValue(0)
    }


  return (
    <div className='counter-container'>
      <h1 className='heading'>{value}</h1>
      <div className='button-container'>
        <button className='btn' onClick={incrementFunction}>Increment</button>
        <button className='btn' onClick={decrementFunction}>Decrement</button>
        <button className='btn' onClick={resetFunction}>Reset</button>
      </div>
    </div>
  )
}
