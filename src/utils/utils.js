import qs from 'qs';
import { BASE_URL, DEFAULT_LIST_LENGTH } from './config';

const DEFAULT_PARAMS = {
  _limit: DEFAULT_LIST_LENGTH,
}

export const getItemsIds = (list) => {
  return list && list.map(item => item.id);
};

const formatIdsSeed = (ids) => {
  return `^(${ids.join('|')})$`;
};

const formatSeed = ({ filterPhrase, cachedItemsIds }) => {
  return qs.stringify(Object.assign({}, 
    DEFAULT_PARAMS, 
    cachedItemsIds && cachedItemsIds.length > 0 && { id_like: formatIdsSeed(cachedItemsIds) },
    filterPhrase && { title_like: filterPhrase }

  ), { encode: false, indices: false, addQueryPrefix: true });
};

export const getList = (params) => {
  const url = `${BASE_URL}${formatSeed(params)}`;
  
  return fetch(url)
    .then(res => {
      if(!res.ok) {
        throw new Error(res.status);
      }

      return res.json();
    });
};
