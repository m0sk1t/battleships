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
        let hit = document.getElementById('hit').play();
        hit = null;

        dispatch(hitShip(turn, shipId, partId))
        dispatch(changeScore(turn))
      } else {
        let miss = document.getElementById('miss').play()
        miss = null;
        
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
