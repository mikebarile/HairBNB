import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import { clearListing } from '../actions/listing_actions';
import App from './app.jsx';
import Home from './home/home';
import ShowListingContainer from './show_listing/show_listing_container';
import MyListingsContainer from './my_listings/my_listings_container';


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
        <Route path="my-listings" component={MyListingsContainer}/>
      </Route>
    </Router>
  </Provider>
);
};

export default Root;
