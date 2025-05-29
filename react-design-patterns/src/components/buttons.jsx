import React from 'react'
import { emitter } from '../App'

const Buttons = () => {

    const onIncremenetCounter = () => {
        emitter.emit("inc")
    }

    const onDecrementCounter = () => {
        emitter.emit("dec")
    }

  return (
    <div>
      <button onClick={onIncremenetCounter}>＋</button>
      <button onClick={onDecrementCounter}>−</button>
    </div>
  )
}

export default Buttons
