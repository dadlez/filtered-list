import qs from 'qs';
import { BASE_URL, DEFAULT_LIST_LENGTH } from './config';

const DEFAULT_PARAMS = {
  _limit: DEFAULT_LIST_LENGTH,
  id_lte: DEFAULT_LIST_LENGTH,
  title_like: ''
}

function formatSeed (params) {
  return qs.stringify(Object.assign({}, DEFAULT_PARAMS, params), { indices: false, addQueryPrefix: true });
}

export const getList = (params = {}) => {
  console.log(`Fetching data from: ${BASE_URL}${formatSeed(params)}`)
  
  return fetch(`${BASE_URL}${formatSeed(params)}`)
    .then(res => {
      if(!res.ok) {
        throw new Error(res.status);
      }

      return res.json();
    });
}

// const serializeText = (text) => {
//   return CASE_SENSITIVE && typeof text === 'string' ? text.toUpperCase() : text;
// }

// export const filterList = (list, text) => {
//   const value = serializeText(text);
//   return text ? list.filter(item => serializeText(item.title).includes(value)) : list;
// }
