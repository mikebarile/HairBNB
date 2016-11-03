import {RECEIVE_LISTING, RECEIVE_LISTINGS, REMOVE_LISTING, RECEIVE_LISTING_ERRORS,
  CLEAR_LISTING_ERRORS
} from '../actions/session_actions';
import { merge } from 'lodash';

const defaultState = {
  title: "",
  host_id: null,
  city: "",
  state: "",
  country: "",
  description: "",
  price: null,
  dog_walks: false,
  deluxe_bed: false,
  house_cat: false,
  gourmet_food: false,
  chew_toys: false,
  frisbee: false,
  mailman: false,
  grooming: false,
  cuddle_buddy: false,
  indoor_poop: false,
  indoor_pee: false,
  barking: false,
  whining: false,
  begging: false,
  shedding: false
};

const ListingReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTING:
      return {
        currentUser: action.currentUser,
        errors: []
      };
    case RECEIVE_LISTINGS:

    case REMOVE_LISTING:

    case RECEIVE_LISTING_ERRORS:
      return {
        currentUser: null,
        errors: action.errors
      };
    case CLEAR_LISTING_ERRORS:
      return {
        currentUser: null,
        errors: action.errors
      };
    default:
      return state;
  }
};

export default ListingReducer;
