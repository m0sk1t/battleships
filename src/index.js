import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import gameInfo from './reducers'
import Game from './components/Game'
import { addShips, createMap } from './actions'

let store = createStore(gameInfo);

console.log(store.getState())

store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(addShips('p1', [ {size: 5, layout: [[0,1], [1,1], [2,1], [3,1], [4,1]]} ]));
store.dispatch(addShips('p1', [ {size: 4, layout: [[6,2], [6,3], [6,4], [6,5]]}, {size: 3, layout: [[9,7], [8,7], [7,7]]}, {size: 3, layout: [[2,5], [2,6], [2,7]]}, {size: 2, layout: [[4,9], [5,9]]} ]));
store.dispatch(createMap('p1', store.getState().ships.p1));

store.dispatch(addShips('p2', [ {size: 5, layout: [[0,1], [1,1], [2,1], [3,1], [4,1]]} ]));
store.dispatch(addShips('p2', [ {size: 4, layout: [[6,2], [6,3], [6,4], [6,5]]}, {size: 3, layout: [[9,7], [8,7], [7,7]]}, {size: 3, layout: [[2,5], [2,6], [2,7]]}, {size: 2, layout: [[4,9], [5,9]]} ]));
store.dispatch(createMap('p2', store.getState().ships.p1));

render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
)