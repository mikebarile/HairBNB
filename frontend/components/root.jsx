import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import App from './app.jsx';
import SessionFormContainer from './session_form/session_form_container';
import UserFormContainer from './user_form/user_form_container';
import ShowListingContainer from './show_listing/show_listing_container';
import Home from './home/home';
import { clearListing } from '../actions/listing_actions';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const purgeListing = () => store.dispatch(clearListing());

  return (
  <Provider store={store}>
    <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
      <Route path="/" component={App} >
        <IndexRedirect to="/home" />
        <Route path="/home" component={Home}/>
        <Route path="listings/:listing_id" component={ShowListingContainer} onLeave={purgeListing}/>
      </Route>
    </Router>
  </Provider>
);
};

export default Root;
