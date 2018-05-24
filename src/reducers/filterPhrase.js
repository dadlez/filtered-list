import { UPDATE_PHRASE } from '../constants';

export default (state, action) => {
  console.log('fired phrase state, action', state, action)
  switch(action.type) {
    case UPDATE_PHRASE:
      return action.text
    default: 
      return state
  }
}
