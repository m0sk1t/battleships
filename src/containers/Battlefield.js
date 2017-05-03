import { connect } from 'react-redux'
import { changeScore, hitShip, hitSquare, switchTurn } from '../actions'
import Map from '../components/Map'

const mapStateToProps = (state) => {
  return {
    turn: state.turn,
    map: state.battlefield
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSquareClick: (turn, hited, pos, shipId, partId) => {
      if (hited) return

      dispatch(hitSquare(turn, pos))
      
      if (shipId != null) {
        dispatch(hitShip(turn, shipId, partId))
        dispatch(changeScore(turn))
      } else {
        dispatch(switchTurn())
      }
    }
  }
}

const Battlefield = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)

export default Battlefield
