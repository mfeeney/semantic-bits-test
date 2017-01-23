import * as types from './actionTypes';
import adverseEffectsApi from '../api/mock/adverseEffectsApi'; //NOTE: just for testing
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadAdverseEffectsApi(adverseEffects){
    return {type: types.LOAD_ADVERSE_EFFECTS_SUCCESS, adverseEffects};
}

export function updateAdverseEffectSuccess(adverseEffect){
  return {type: types.UPDATE_ADVERSE_EFFECT_SUCCESS, adverseEffect};
}

export function loadAdverseEffects(){
  return function(dispatch){
    dispatch(beginAjaxCall());
    return adverseEffectsApi.getAllAdverseEffects().then(adverseEffects => {
      dispatch(loadAdverseEffectsApi(adverseEffects));
    }).catch(error => {
      throw(error);
    });
  };
}

//TODO: rest of the actions to access the api