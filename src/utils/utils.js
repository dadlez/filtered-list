import qs from 'qs';
import { BASE_URL, DEFAULT_LIST_LENGTH, CASE_SENSITIVE } from './config';

const URL_PARAMS = {
  // id: { lte: DEFAULT_LIST_LENGTH } // why not working?
  id: [getIdRangeArr(DEFAULT_LIST_LENGTH)]
}

function getIdRangeArr(limit) { //TODO: remove when solved LHE API filtering
  const range = [];
  for(let i=1; i <= limit; i++) {
    range.push(i);
  }

  return range;
}

export const getList = (params = {}) => {
  const stringifiedUrlParams = qs.stringify(URL_PARAMS, { indices: false })
  console.log(`Fetching data from: ${BASE_URL}?${stringifiedUrlParams}`)
  
  return fetch(`${BASE_URL}l?${stringifiedUrlParams}`, params)
    .then(res => {
      if(!res.ok) {
        throw new Error(res.status);
      }

      return res.json();
    });
}

export const shortenList = (list, len = DEFAULT_LIST_LENGTH) => {
  return list.slice(0, len);
}

const serializeText = (text) => {
  return CASE_SENSITIVE && typeof text === 'string' ? text.toUpperCase() : text;
}

export const filterList = (list, text) => {
  const value = serializeText(text);
  return text ? list.filter(item => serializeText(item.title).includes(value)) : list;
}
