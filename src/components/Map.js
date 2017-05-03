import React, { PropTypes } from 'react'
import Square from './Square'

const Map = ({turn, map, onSquareClick }) => (
  <div className="col-md-7 score_board">
    <table className={"battlefield " + turn}>
      <tbody>
        {map[turn].map((row, r) => 
          <tr key={r}>
            {row.map((square, c) => 
              <Square 
                key={c} 
                hited={square.hited}
                shipId={square.shipId}
                onClick={() => onSquareClick(turn, square.hited, [r,c], square.shipId, square.partId)}
              />
            )}
          </tr>
        )}
      </tbody>
    </table>
  </div>
)

Map.propTypes = {
  map: PropTypes.shape({
    p1: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    shipId: PropTypes.number,
    partId: PropTypes.number,
    hited: PropTypes.bool.isRequired,
  }).isRequired).isRequired).isRequired,
  p2: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    shipId: PropTypes.number,
    partId: PropTypes.number,
    hited: PropTypes.bool.isRequired,
  }).isRequired).isRequired).isRequired
  }),
  onSquareClick: PropTypes.func.isRequired
}

export default Map