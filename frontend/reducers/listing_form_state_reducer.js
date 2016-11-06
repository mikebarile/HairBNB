import { UPDATE_LISTING_FORM } from '../actions/listing_actions';
import { merge } from 'lodash';

const defaultState = {
  title: "",
  host_id: null,
  lat: null,
  lng: null,
  street_address: "",
  city: "",
  zip_code: "",
  state: "",
  country: "",
  image_url: "",
  apt_num: "",
  desscription: "",
  price: "",
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
  shedding: false,
};

const ListingFormStateReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_LISTING_FORM:
      return action.formState;
    default:
      return state;
  }
};

export default ListingFormStateReducer;
