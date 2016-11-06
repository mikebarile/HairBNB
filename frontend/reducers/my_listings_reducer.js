import { RECEIVE_MY_LISTINGS, RECEIVE_NEW_LISTING } from '../actions/listing_actions';
import { merge } from 'lodash';

const defaultState = [];

const MyListingsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MY_LISTINGS:
      return action.listings;
    case RECEIVE_NEW_LISTING:
      let newState = merge({}, state);
      newState.push(action.listing);
      return newState;
    default:
      return state;
  }
};

export default MyListingsReducer;
