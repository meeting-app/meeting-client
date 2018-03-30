import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './reducers';
import { USER_LOGGED_OUT } from './constantes/types';

const root = (state, action) => {
  if (action.type === USER_LOGGED_OUT) {
    return reducer(undefined, action);
  }
  return reducer(state, action);
}

const middlewares = [
  thunk
];

export default createStore(
  root,
  composeWithDevTools(applyMiddleware(...middlewares))
);
