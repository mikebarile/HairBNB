import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ListingReducer from './listing_reducer';
import MyListingsReducer from './my_listings_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  listing: ListingReducer,
  myListings: MyListingsReducer
});

export default RootReducer;
