import {createStore, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import RootReducer from './reducer';
let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
export default function configureStore(preloadedState) {
  return createStore(
    RootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunkMiddleware)),
  );
}
