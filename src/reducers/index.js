import { UPDATE_PHRASE } from '../constants';

const preparePhraseAction = (action) => {
  return { 
    text: action.text,
    id: Math.random()
  };
} 

const actions = (state = {}, action) => {
  let result = null;
  switch(action.type) {
    case UPDATE_PHRASE:
    result = { filterText: preparePhraseAction(action)};
      console.log('actions as state', result);
      return result;
  }
}

export default actions;