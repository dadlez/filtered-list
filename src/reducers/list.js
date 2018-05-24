import { FETCH_LIST } from '../constants';
import { getItemsIds } from '../utils/utils';

export default (state, action) => {
  console.log('fired items state, action', state, action.type, action.payload)
  if (!action.payload) {
    action.payload = {
      items: [],
    }
  }
  
  const { items, loading } = action.payload;
  const updateCache = state.cachedItemsIds.length === 0;

  console.log('response', Object.assign(
    state,
    { items, loading },
    updateCache && { cachedItemsIds: getItemsIds(items)}
  ))

  switch(action.type) {
    case FETCH_LIST:
      return Object.assign(
        state,
        { items, loading },
        updateCache && { cachedItemsIds: getItemsIds(items)}
      );
    default: 
      return state;
  }
}
