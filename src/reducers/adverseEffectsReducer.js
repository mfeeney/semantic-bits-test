import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function adverseEffectsReducer(state = initialState.adverseEffects, action){
  switch(action.type){
    case types.LOAD_ADVERSE_EFFECTS_SUCCESS:      
      return action.adverseEffects;

    default:
      return state;
  }  
}