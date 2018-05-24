import { UPDATE_PHRASE, FETCH_LIST, SHOW_ERROR } from '../constants';
import { getList } from '../utils/utils';

export const updatePhrase = text => {
  return {
    type: UPDATE_PHRASE,
    text
  }
};

export const showError = error => {
  console.log(`Error while fetching data, check if the URL above is correct.\n${error}`);

  return {
    type: SHOW_ERROR, 
    error
  }
};

const itemsFetched = list => {
  return {
    type: FETCH_LIST,
    payload: {
      items: list,
      loading: false
    }
  }
};

export const fetchList = () => (dispatch, getState) => {
  const { filterPhrase, list: { cachedItemsIds } } = getState();
  
  getList({ filterPhrase, cachedItemsIds })
  .then(res => dispatch(itemsFetched(res)))
  .catch(err => dispatch(showError(err.toString()))
  );
};
