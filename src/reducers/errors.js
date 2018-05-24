import { SHOW_ERROR } from '../constants';

export default (state, action) => {
  console.log('fired errors state, action', [state], action)
  switch(action.type) {
    case SHOW_ERROR:
      return action.error
    default: 
      return state
  }
}
