import {RECEIVE_MY_LISTINGS} from '../actions/listing_actions';
import { merge } from 'lodash';

const defaultState = {};

const MyListingsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    default:
      return state;
  }
};

export default MyListingsReducer;
