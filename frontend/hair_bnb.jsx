import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// Imports for testing
// import {signup, login, logout} from './util/session_api_util';
// import {signup, login, logout} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);

  // Testing window functions
  window.store = configureStore();
});
