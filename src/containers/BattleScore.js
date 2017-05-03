import { connect } from 'react-redux'
import { hitSquaresAround } from '../actions'
import ScoreBoard from '../components/ScoreBoard'

const mapDispatchToProps = (dispatch) => {
  return {    
    onDestroyedShip: (turn, layout) => {
      dispatch(hitSquaresAround(turn, layout))
    }}
}

const mapStateToProps = (state) => {
  return {
    turn: state.turn,
    playersScore: state.playersScore,
    ships: state.ships
  }
}

const BattleScore = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreBoard)

export default BattleScore