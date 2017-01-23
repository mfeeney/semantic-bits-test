import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

// only difference in prod and dev configureStore versions is the removal of
// reduxImmutableStateInvariant() which is really only useful in development
export default function configureStore(initialState){
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk) 
  );
}