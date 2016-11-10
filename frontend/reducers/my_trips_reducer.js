import { RECEIVE_MY_TRIPS, RECEIVE_NEW_BOOKING, RECEIVE_EDITED_TRIP,
   CLEAR_STATE } from '../actions/booking_actions';
import { merge } from 'lodash';

const defaultState = [];

const MyTripsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_MY_TRIPS:
      return action.bookings;
    case RECEIVE_EDITED_TRIP:
      newState = state.slice(0);
      newState.push(action.booking);
      return newState;
    case RECEIVE_NEW_BOOKING:
      newState = state.slice(0);
      newState.push(action.booking);
      return newState;
    case CLEAR_STATE:
      return defaultState;
    default:
      return state;
  }
};

export default MyTripsReducer;
