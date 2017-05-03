import { combineReducers } from 'redux'
import playersScore from './playersScore'
import ships from './ships'

const scoreBoard = combineReducers({
  playersScore,
  ships
})

export default scoreBoard