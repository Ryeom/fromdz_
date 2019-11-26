import React from 'react'
import CounterComponent from '../Components/Counter1'
import { useHistory1 } from '../useHook'

// Hook ver.
const Counter1 = () => {
  const { number, input, changeNumber, onChangeInput, onRedo, onUndo } = useHistory1()

  return <CounterComponent number={number} input={input} onChangeInput={onChangeInput} changeNumber={changeNumber} onRedo={onRedo} onUndo={onUndo} />
}

export default Counter1
