import React, { PropTypes } from 'react'

const shipClass = ['Aircraft', 'Battleship', 'Cruiser', 'Submarine', 'Carrier']

let ScoreBoard = ({turn, playersScore, ships, onDestroyedShip}) => {
  return (
    <div key="score_board" className="col-md-5 score_board">
      <div className="score">
        <div className="player_1">
          <h1>{playersScore.p1 || 0}</h1>
          <hr/>
          <h4>Player 1</h4>
        </div>
        <div className="player_2">
          <h1>{playersScore.p2 || 0}</h1>
          <hr/>
          <h4>Player 2</h4>
        </div>
      </div>
      <div key="ships" className="ships">
        {ships[turn].map(ship =>
          <div key={ship.shipId} className={shipClass[ship.classId]}>
            <img src={"/images/" + shipClass[ship.classId] + " Shape.png"}  className="ship" alt=""/>
              {ship.layout.map(part => {
                if(ship.health > 0) {
                  return <img key={part.partId} src="images/Miss small.png" className="marker" alt=""/>
                } else {
                  onDestroyedShip(turn, ship.layout);
                  return <img key={part.partId} src="images/Hit small.png" className="marker" alt=""/>
                }
              }
              )}
          </div>
        )}
      </div>
    </div>
  )
}

ScoreBoard.propTypes = {
  playersScore: PropTypes.shape({
    p1: PropTypes.number.isRequired,
    p2: PropTypes.number.isRequired
  }),
  ships: PropTypes.shape({
    p1: PropTypes.arrayOf(PropTypes.shape({
    shipId: PropTypes.number.isRequired,
    classId: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    health: PropTypes.number.isRequired,
    layout: PropTypes.arrayOf(PropTypes.shape({
      partId: PropTypes.number.isRequired,
      hited: PropTypes.bool.isRequired
    }).isRequired).isRequired,
  }).isRequired).isRequired,
    p2:PropTypes.arrayOf(PropTypes.shape({
      shipId: PropTypes.number.isRequired,
      classId: PropTypes.number.isRequired,
      size: PropTypes.number.isRequired,
      health: PropTypes.number.isRequired,
      layout: PropTypes.arrayOf(PropTypes.shape({
        partId: PropTypes.number.isRequired,
        hited: PropTypes.bool.isRequired
      }).isRequired).isRequired,
    }).isRequired).isRequired
  })
}

export default ScoreBoard
