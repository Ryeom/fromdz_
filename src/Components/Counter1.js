import React from 'react'
import 'reset-css'
import styled from 'styled-components'

const Root = styled.div`
  height: 100vh;
  background: linear-gradient(0deg, rgba(176, 43, 219, 0.6867121848739496) 0%, rgba(76, 125, 255, 1) 100%);
  display: flex;
  flex-direction: column;
  input:focus {
    outline: none;
  }
`

const NumberBoard = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const NumberSpan = styled.span`
  display: flex;
  flex: 1;
  font-size: 100px;
  font-weight: 600;
  color: white;
  align-items: center;
  justify-content: center;
`

const InputBoard = styled.div`
  display: flex;
  flex: 0.5;
  align-items: center;
  justify-content: space-around;
`

const Input = styled.input`
  flex: 0.5;
  font-size: 40px;
  opacity: 0.1;
  text-align: center;
  border: none;
  color: #111;
  background-color: white;
`

const ButtonBoard = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

const CircleButton = styled.button`
  color: #444444;
  background-color: white;
  opacity: 0.3;
  height: 100px;
  width: 100px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border: 0px;
  outline: none;
  margin-left: 10px;
  font-size: 25px;

  &:hover {
    background-color: transparent;
  }

  &:first-child {
    margin: 0;
  }
`

const Counter1 = ({ number, input, onChangeInput, changeNumber, onRedo, onUndo }) => {
  return (
    <Root>
      <NumberBoard>
        <NumberSpan>{number}</NumberSpan>
      </NumberBoard>
      <InputBoard>
        <Input value={input} name="input" onChange={onChangeInput} />
      </InputBoard>

      <ButtonBoard>
        <CircleButton name="undo" onClick={changeNumber} disabled={onUndo}>
          Undo
        </CircleButton>
        <CircleButton name="increment" onClick={changeNumber}>
          +
        </CircleButton>
        <CircleButton name="decrement" onClick={changeNumber}>
          -
        </CircleButton>
        <CircleButton name="redo" onClick={changeNumber} disabled={onRedo}>
          Redo
        </CircleButton>
      </ButtonBoard>
    </Root>
  )
}

export default Counter1
