import { UPDATE_PHRASE } from '../constants';

export const updatePhrase = (text) => {
  const action = { 
    type: UPDATE_PHRASE,
    text
  };
  console.log('action in updatePhrase', action);
  return action;
}
