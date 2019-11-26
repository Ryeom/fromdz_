import React from 'react'
import CounterComponent from '../Components/Counter1'
import { useHistory2 } from '../useHook'

// Redux ver.
const Counter2 = () => {
  const { number, input, changeNumber, onChangeInput, onRedo, onUndo } = useHistory2()

  return <CounterComponent number={number} input={input} onChangeInput={onChangeInput} changeNumber={changeNumber} onRedo={onRedo} onUndo={onUndo} />
}

export default Counter2
