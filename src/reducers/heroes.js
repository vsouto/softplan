import {
  GET_ALL,
} from '../constants/ActionTypes'

const initialState = [
  {
    title: 'Hulk',
    id: 0
  }
]

export default function heroes(state = initialState, action) {
  switch (action.type) {
    case GET_ALL:
      return [
        ...state
      ]

    default:
      return state
  }
}
