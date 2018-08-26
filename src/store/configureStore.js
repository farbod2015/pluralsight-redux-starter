import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from 'redux-thunk';

import rootReducer from "../reducers/index";

const composeEnhancers = composeWithDevTools({ realtime: true });

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}
