import { FETCH_LIST } from '../constants';
import { getItemsIds } from '../utils/utils';

export function fetchedItems(state, action) {

  const updateCache = state.cachedItemsIds.length === 0;

  switch(action.type) {
    case FETCH_LIST:
      return Object.assign(
        state,
        { items: action.list },
        updateCache && { cachedItemsIds: getItemsIds(action.list)}
      );
    default: 
      return state;
  }
}
