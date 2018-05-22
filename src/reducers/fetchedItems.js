import { FETCH_LIST } from '../constants';

export function fetchedItems(state, action) {
  switch(action.type) {
    case FETCH_LIST:
      return action.list
    default: 
      return state
  }
}
