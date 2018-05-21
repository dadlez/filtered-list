import { UPDATE_PHRASE } from '../constants';

export function filterPhrase(state = '', action) {
  switch(action.type) {
    case UPDATE_PHRASE:
      return action.text
    default: 
      return state
  }
}
