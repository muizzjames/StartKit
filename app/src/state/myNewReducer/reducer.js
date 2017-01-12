import { DEFAULT_ACTION } from '../action-types';

function myNewReducer(state = {}, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default myNewReducer;

export function selectMyNewReducer(state) {
  return state.get('myNewReducer');
}
