const ship = (state, action) => {
  switch (action.type) {

    case 'HIT_SHIP':
      if (state.shipId !== action.shipId) {
        return state
      }

      let newShipState = Object.assign({}, state);
      newShipState.layout.forEach(function(part) {
        if(part.partId === action.partId) {
          if (!part.hited) {
            newShipState.health -= 1;
            part.hited = true; 
          }
        }
      });

      return newShipState

    case 'ADD_SHIP':
      return {
        ...state,
        'classId': state.shipId,
        'size': action.ship.size,
        'health': action.ship.size,
        'layout': action.ship.layout.map((part, id) => {
          return {
            'partId': id,
            'position': part,
            'hited': false
          }
        })
      }

    default:
      return state
  }
}

const ships = (state = {p1:[], p2:[]}, action) => {
  switch (action.type) {

    case 'HIT_SHIP':
      return Object.assign({}, state, {[action.turn]:state[action.turn].map(currShip =>
        ship(currShip, action)
      )})

    case 'ADD_SHIPS':
    let newShips = action.ships.map((currShip, id) => {
          return ship({'shipId': id + state[action.turn].length}, Object.assign({}, {'type': "ADD_SHIP"}, {'ship': currShip}))
    });
      return Object.assign({}, state, {[action.turn]:state[action.turn].concat(newShips)})

    default:
      return state
  }
}

export default ships