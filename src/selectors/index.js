import { createSelector } from 'reselect'
//import { GET_ALL } from '../constants/ActionTypes'

const getHeroes = state => state.heroes

export const getAllHeroes = createSelector(
  [getHeroes],
  heroes => (
    heroes
  )
)
