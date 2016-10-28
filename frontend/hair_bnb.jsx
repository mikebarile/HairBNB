import React from 'react';
import ReactDOM from 'react-dom';

// Imports for testing
import {signup, login, logout} from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to HairBnB!</h1>, root);

    // Testing window functions
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.store = configureStore();
});
