import React, { useContext, useState } from 'react'
import { ProductContext } from '../App'

const Counter = () => {

    const vl = useContext(ProductContext);
    const [counter, setCounter] =useState(vl)

    const increaseHandler = () => {
      setCounter(counter+1)
    }

    const decreaseHandler = () => {
      setCounter(counter-1)
    }

  return (
    <div className='Counter'>
      <p className='count'>{counter}</p>
      <button onClick={increaseHandler}>+</button>
      <button onClick={decreaseHandler}>-</button>
    </div>
  )
}

export default Counter;
