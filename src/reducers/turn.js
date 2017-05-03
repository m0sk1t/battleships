const turn = (state = 'p1', action) => {
  switch (action.type) {

    case 'SWITCH_TURN':
      if(state === 'p1') {
        return state.slice(0,1) + 2
      } else {
        return state.slice(0,1) + 1
      }
      
    default:
      return state
  }
}

export default turn