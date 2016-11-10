import { RECEIVE_MY_TRIPS, RECEIVE_NEW_LISTING, CLEAR_STATE
} from '../actions/booking_actions';
import { merge } from 'lodash';

const defaultState = [];

const MyTripsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MY_TRIPS:
      return action.listings;
    case RECEIVE_NEW_LISTING:
      let newState = state.slice(0);
      newState.push(action.listing);
      return newState;
    case CLEAR_STATE:
      return defaultState;
    default:
      return state;
  }
};

export default MyListingsReducer;
