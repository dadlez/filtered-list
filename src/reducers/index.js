import { UPDATE_PHRASE } from '../constants';
import { filterPhrase } from './input';

const initialState = {
  list: [],
  filterPhrase: ''
};

function reducer(state = initialState, action) {
  return {
    filterPhrase: filterPhrase(state.filterPhrase, action)
  }
}

export default reducer;