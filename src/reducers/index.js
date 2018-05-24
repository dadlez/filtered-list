import filterPhrase from './filterPhrase';
import list from './list';
import errors from './errors';

const initialState = {
  list: {
    items: [],
    cachedItemsIds: [] //cache for searching title in initially fetched items only
  },
  errors: '',
  filterPhrase: '',
  loading: false
};

function reducer(state = initialState, action) {
  console.log('fire reducer', state)  
  return {
    filterPhrase: filterPhrase(state.filterPhrase, action),
    list: list(state.list, action),
    errors: errors(state.errors, action)
  }
}

export default reducer;