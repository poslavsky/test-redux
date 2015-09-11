import * as types from '../constants/ActionTypes';


export function markCaught(name) {
  return {
    type: types.MARK_CAUGHT,
    name
  };
}
