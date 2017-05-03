import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Battleships extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Battleships</h1>
        </header>
        <div className="col-md-5 score_board">
          <div className="score">
            <div className="player_1">
              <h1>00</h1>
              <hr/>
              <h4>Player 1</h4>
            </div>
            <div className="player_2">
              <h1>00</h1>
              <hr/>
              <h4>Player 2</h4>
            </div>
          </div>
        </div>
        <img src="/images/Aircraft Shape.png" />
      </div>
      
    );
  }
}

ReactDOM.render(
  <Battleships/>, document.body);