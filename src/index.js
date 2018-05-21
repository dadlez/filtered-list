import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import { updatePhrase } from './actions';

const store = createStore(reducer);
console.log(store.getState())

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(updatePhrase('moj telst'))
store.dispatch(updatePhrase('moja ukochana'))

unsubscribe();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
