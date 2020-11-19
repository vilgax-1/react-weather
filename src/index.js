import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import {store as str }  from './store/store';

ReactDOM.render(
  <Provider store={str}>
    <App />
  </Provider>,
  document.getElementById('root')
);
