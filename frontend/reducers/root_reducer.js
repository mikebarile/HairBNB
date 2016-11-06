import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ListingReducer from './listing_reducer';
import MyListingsReducer from './my_listings_reducer';
import ListingFormStateReducer from './listing_form_state_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  listing: ListingReducer,
  myListings: MyListingsReducer,
  listingFormState: ListingFormStateReducer
});

export default RootReducer;
