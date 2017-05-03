const battlefield = (state = {p1:[], p2:[]}, action) => {
  switch (action.type) {

    case 'CREATE_MAP':
    let map = new Array(10);
    for(let i = 0; i < map.length; i++) {
        map[i] = [];
    }
    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            map[i][j] = {'hited': false};
        }
    }
    action.ships.forEach(function(ship) {
      ship.layout.forEach(function(shipPart){
        let pos = shipPart.position;
        map[pos[0]][pos[1]] = Object.assign({}, map[pos[0]][pos[1]], {
          'shipId': ship.shipId,
          'partId': shipPart.partId
        });
      });
    });
    return  Object.assign({}, state, {[action.turn]:map})

    case 'HIT_SQUARE':
      let updMap = [...state[action.turn]];
      updMap[action.square[0]][action.square[1]] = Object.assign({}, updMap[action.square[0]][action.square[1]], {'hited': true})
      return Object.assign({}, state, {[action.turn]:updMap})

    case 'HIT_SQUARES_AROUND':
      let newMap = [...state[action.turn]];
      action.layout.forEach(part => {
        let y = part.position[0],
            x = part.position[1];
        
        newMap[y - 1] ? newMap[y - 1][x - 1] ? newMap[y - 1][x - 1] = Object.assign({}, newMap[y - 1][x - 1], {'hited': true}) : 0 : 0;
        newMap[y - 1] ? newMap[y - 1][x    ] ? newMap[y - 1][x    ] = Object.assign({}, newMap[y - 1][x    ], {'hited': true}) : 0 : 0;
        newMap[y - 1] ? newMap[y - 1][x + 1] ? newMap[y - 1][x + 1] = Object.assign({}, newMap[y - 1][x + 1], {'hited': true}) : 0 : 0;
        newMap[y    ] ? newMap[y    ][x - 1] ? newMap[y    ][x - 1] = Object.assign({}, newMap[y    ][x - 1], {'hited': true}) : 0 : 0;
        newMap[y    ] ? newMap[y    ][x + 1] ? newMap[y    ][x + 1] = Object.assign({}, newMap[y    ][x + 1], {'hited': true}) : 0 : 0;
        newMap[y + 1] ? newMap[y + 1][x - 1] ? newMap[y + 1][x - 1] = Object.assign({}, newMap[y + 1][x - 1], {'hited': true}) : 0 : 0;
        newMap[y + 1] ? newMap[y + 1][x    ] ? newMap[y + 1][x    ] = Object.assign({}, newMap[y + 1][x    ], {'hited': true}) : 0 : 0;
        newMap[y + 1] ? newMap[y + 1][x + 1] ? newMap[y + 1][x + 1] = Object.assign({}, newMap[y + 1][x + 1], {'hited': true}) : 0 : 0;
      })
      return Object.assign({}, state, {[action.turn]:newMap})

    default:
      return state
  }
}

export default battlefield