//root reducer
import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import adverseEffects from './adverseEffectsReducer';

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  adverseEffects
});

export default rootReducer;