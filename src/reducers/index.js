import { combineReducers } from 'redux'
import battlefield from './battlefield'
import ships from './ships'
import playersScore from './playersScore'
import turn from './turn'

const gameInfo = combineReducers({
  ships,
  battlefield,
  playersScore,
  turn
})

export default gameInfo