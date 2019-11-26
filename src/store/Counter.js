import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'

const CHANGEINPUT = 'counter/CHANGEINPUT'
const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMENT'
const UNDO = 'counter/UNDO'
const REDO = 'counter/REDO'

export const changeInput = createAction(CHANGEINPUT, ({ name, value }) => ({ name, value }))
export const increment = createAction(INCREMENT)
export const decrement = createAction(DECREMENT)
export const undo_ = createAction(UNDO)
export const redo_ = createAction(REDO)

const initialState = {
  number: 0,
  input: 0,
  undo: [],
  redo: [],
  onUndo: false,
  onRedo: false,
}

const counter = handleActions(
  {
    [CHANGEINPUT]: (state, { payload: { name, value } }) =>
      produce(state, (draft) => {
        draft[name] = value
      }),
    [INCREMENT]: (state) => {
      const { number, input, undo } = state
      return {
        ...state,
        number: number + input,
        undo: [...undo, number],
        redo: [],
      }
    },
    [DECREMENT]: (state) => {
      const { number, input, undo } = state
      return {
        ...state,
        number: input - number,
        undo: [...undo, input],
      }
    },
    [UNDO]: (state) => {
      const { redo, undo, number } = state
      if (undo.length === 0) return state
      return {
        ...state,
        number: undo.pop(),
        redo: [...redo, number],
      }
    },
    [REDO]: (state) => {
      const { redo, undo, number } = state
      if (redo.length === 0) return state
      return {
        ...state,
        number: redo.pop(),
        undo: [...undo, number],
      }
    },
  },
  initialState,
)

export default counter
