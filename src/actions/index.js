import { UPDATE_PHRASE } from '../constants';

export function updatePhrase(text) {
  return {
    type: UPDATE_PHRASE,
    text
  }
}