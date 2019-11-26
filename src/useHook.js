import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeInput, increment, decrement, undo_, redo_ } from './store/Counter'

export const useHistory1 = () => {
  const [number, setNumber] = useState(0)
  const [inputNumber, setInputNumber] = useState(0)
  const [list, setList] = useState([0])
  const [index, setIndex] = useState(0)

  /**
   * @param {value : set list} value
   */
  const addHistory = (value) => {
    const newlist = list.slice(0, index + 1)
    setList([...newlist, value])
    setIndex(index + 1)
  }

  /**
   * @param {event : click element's name} name
   */
  const getIndex = (name) => {
    switch (name) {
      case 'undo':
        setIndex(index - 1)
        return list[index - 1]
      case 'redo':
        setIndex(index + 1)
        return list[index + 1]
      default:
        return
    }
  }

  /**
   * @param {event : click} e
   */
  const changeNumber = (e) => {
    const {
      target: { name },
    } = e
    if (name === 'increment' || name === 'decrement') {
      const value = name === 'increment' ? number + inputNumber : number - inputNumber
      setNumber(value)
      addHistory(value)
      return
    }
    ;(name === 'undo' || name === 'redo') && setNumber(getIndex(name))
  }

  /**
   * @param {event : input element} e
   */
  const onChangeInput = (e) => {
    const chk = /^[0-9]*$/g
    const {
      target: { value },
    } = e
    if (!chk.test(value)) {
      setInputNumber('')
      return
    }
    setInputNumber(parseInt(value))
  }

  return {
    number,
    input: inputNumber,
    changeNumber,
    onChangeInput,
    onUndo: index <= list.length && index !== 0 ? false : true,
    onRedo: index !== list.length && list.length - index >= 2 ? false : true,
  }
}

export const useHistory2 = () => {
  const dispatch = useDispatch()
  const { input, number, undo, redo } = useSelector(({ counter }) => ({
    input: counter.input,
    number: counter.number,
    undo: counter.undo, //[]
    redo: counter.redo, //[]
  }))

  /**
   * @param {event : input element} e
   */
  const onChangeInput = (e) => {
    const chk = /^[0-9]*$/g
    const {
      target: { name, value },
    } = e
    if (!chk.test(value)) {
      dispatch(changeInput({ name, value: '' }))
      return
    }
    dispatch(changeInput({ name, value: parseInt(value) }))
  }

  /**
   * @param {event : click} e
   */
  const changeNumber = (e) => {
    const {
      target: { name },
    } = e
    switch (name) {
      case 'increment':
        dispatch(increment())
        break
      case 'decrement':
        dispatch(decrement())
        break
      case 'undo':
        dispatch(undo_())
        break
      case 'redo':
        dispatch(redo_())
        break
      default:
        break
    }
  }
  return {
    number,
    input,
    changeNumber,
    onChangeInput,
    onUndo: undo.length > 0 ? false : true,
    onRedo: redo.length > 0 ? false : true,
  }
}
