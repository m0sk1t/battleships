import React from 'react'
import Header from '../containers/Header'
import Battlefield from '../containers/Battlefield'
import BattleScore from '../containers/BattleScore'

const Game = () => (
  <div  itemID="content" className="container">
    <div className="row">
      <Header />
      <Battlefield />
      <BattleScore />
    </div>
  </div>
)

export default Game