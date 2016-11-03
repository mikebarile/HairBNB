import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ListingReducer from './listing_reducer';
import ListingsIndexReducer from './listings_index_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  listing: ListingReducer,
});

export default RootReducer;
