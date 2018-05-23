import { filterPhrase } from './updateFilterPhrase';
import { fetchedItems } from './fetchedItems';

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
  return {
    filterPhrase: filterPhrase(state.filterPhrase, action),
    list: fetchedItems(state.list, action)
  }
}

export default reducer;