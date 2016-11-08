import { receiveMyListings, receiveListing, receiveNewListing, removeListing,
  receiveListingErrors, updateListingForm, FETCH_LISTING, FETCH_MY_LISTINGS,
  CREATE_LISTING, DELETE_LISTING, EDIT_LISTING, UPDATE_IMAGE, FETCH_COORDS
} from '../actions/listing_actions';

import {fetchListing, fetchListings, createListing, deleteListing,
  editListing, fetchCoords
} from '../util/listing_api_util';

import Cloudinary from 'cloudinary';

export default ({ getState, dispatch }) => next => action => {
  const receiveListingSuccess = listing => {
    dispatch(receiveListing(listing));
  };

  const receiveMyListingsSuccess = listings => {
    dispatch(receiveMyListings(listings));
  };

  const removeListingSuccess = listing => {
    dispatch(removeListing(listing));
  };

  const receiveNewListingSuccess = listing => {
    dispatch(receiveNewListing(listing));
  };

  const receiveImageSuccess = object => {
    dispatch(updateListingForm({image_url: object.secure_url}));
  };

  const receiveCoordsSuccess = (data) => {
    let lat = data.results[0].geometry.location.lat;
    let lng = data.results[0].geometry.location.lng;
    dispatch(updateListingForm({lat, lng}));
  };

  const errorCallback = xhr => dispatch(receiveListingErrors(xhr.responseJSON));

  switch(action.type) {
    case FETCH_LISTING:
      fetchListing(action.id, receiveListingSuccess, errorCallback);
      return next(action);
    case FETCH_MY_LISTINGS:
      fetchListings(action.params, receiveMyListingsSuccess);
      break;
    case CREATE_LISTING:
      createListing(action.listing, receiveNewListingSuccess);
      return next(action);
    case DELETE_LISTING:
      deleteListing(action.id, removeListingSuccess);
      return next(action);
    case EDIT_LISTING:
      editListing(action.listing, receiveListingSuccess);
      return next(action);
    case FETCH_COORDS:
      fetchCoords(action.street_address, action.city, action.state, action.zip_code, action.country, receiveCoordsSuccess);
    default:
      return next(action);
  }
};
