import {
  GET_ALL,
} from '../constants/ActionTypes'

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

export default function heroes(state = initialState, action) {
  switch (action.type) {
    case GET_ALL:
      return [
        ...state
        /*{
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        }*/
      ]

    default:
      return state
  }
}
