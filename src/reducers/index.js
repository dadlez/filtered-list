import { filterPhrase } from './updateFilterPhrase';
import { fetchedItems } from './fetchedItems';

const initialState = {
  list: [],
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