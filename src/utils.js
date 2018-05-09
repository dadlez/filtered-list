const URL = 'https://jsonplaceholder.typicode.com/posts';
const DEFAULT_LIST_LENGTH = 10;

export const getList = (params = {}) => {
  return new Promise((resolve, reject) => {
    fetch(URL, params)
    .then(res => {
      if (res.status !== 200) {
        reject(res.status); // rejection not used, but kept this to make getList ready for errors handling
      }
      return res.json();
    })
    .then(resJson => resolve(resJson));
  })
}

export const shortenList = (list, len = DEFAULT_LIST_LENGTH) => {
  return list.slice(0, len);
}

export const filterList = (list, text) => {
  return text ? list.filter(item => item.title.includes(text)) : list;
}
