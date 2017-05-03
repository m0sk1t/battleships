export const addShips = (turn, ships) => {
  return {
    type: 'ADD_SHIPS',
    turn,
    ships
  }
}

export const hitShip = (turn, shipId, partId) => {
  return {
    type: 'HIT_SHIP',
    turn,
    shipId,
    partId
  }
}

export const changeScore = (player) => {
  return {
    type: 'CHANGE_SCORE',
    player
  }
}

export const hitSquare = (turn, square) => {
  return {
    type: 'HIT_SQUARE',
    turn,
    square
  }
}

export const createMap = (turn, ships) => {
  return {
    type: 'CREATE_MAP',
    turn,
    ships
  }
}

export const hitSquaresAround = (turn, layout) => {
  return {
    type: 'HIT_SQUARES_AROUND',
    turn,
    layout
  }
}

export const switchTurn = () => {
  return {
    type: 'SWITCH_TURN'
  }
}