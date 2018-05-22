import { UPDATE_PHRASE, FETCH_LIST } from '../constants';
import { getList } from '../utils/utils';

export const updatePhrase = (text) => {
  return {
    type: UPDATE_PHRASE,
    text
  }
}

const itemsFetched = (list) => {
  return {
    type: FETCH_LIST,
    list
  }
}

export const fetchList = () => (dispatch, getState) => {
  const seed = getState().filterPhrase;
  
  getList({ title_like: seed })
  .then(res => dispatch(itemsFetched(res)))
  .catch(err => {
    console.log(`Error while fetching data, check if the URL above is correct.\n${err}`);
  });
}
