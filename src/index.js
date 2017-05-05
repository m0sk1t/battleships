import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import gameInfo from './reducers'
import Game from './components/Game'
import CreateShips from './createShips'
import { addShips, createMap } from './actions'

let store = createStore(gameInfo);

console.log(store.getState())

store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(addShips( 'p1', CreateShips([5, 4, 3, 3, 2]) ));
store.dispatch(createMap('p1', store.getState().ships.p1));

store.dispatch(addShips( 'p2', CreateShips([5, 4, 3, 3, 2]) ))
store.dispatch(createMap('p2', store.getState().ships.p2));

render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
)