const playersScore = (state = {p1: 0, p2: 0}, action) => {
  switch (action.type) {

    case 'CHANGE_SCORE':
      return Object.assign({}, state, {
        [action.player] : state[action.player] + 1
      })
      
    default:
      return state
  }
}

export default playersScore