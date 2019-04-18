import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './component/App';
import reducers from './reducers';
import './index.css';

const store = createStore(reducers, 
  { 
    auth: { authenticated: localStorage.getItem('token') } 
  },
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.querySelector('#root')
);