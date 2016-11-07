import { receiveMyListings, receiveListing, receiveNewListing, removeListing,
  receiveListingErrors, updateListingForm, FETCH_LISTING, FETCH_MY_LISTINGS,
  CREATE_LISTING, DELETE_LISTING, EDIT_LISTING, UPDATE_IMAGE
} from '../actions/listing_actions';

import {fetchListing, fetchListings, createListing, deleteListing,
  editListing
} from '../util/listing_api_util';

import { cloudinary } from 'cloudinary';

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
    case UPDATE_IMAGE:
      Cloudinary.uploader.upload(action.file, receiveImageSuccess);
      return next(action);
    default:
      return next(action);
  }
};
