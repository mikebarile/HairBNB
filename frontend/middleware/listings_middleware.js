import { receiveListings, receiveListing, removeListing, FETCH_LISTING,
  FETCH_LISTINGS, CREATE_LISTING, DELETE_LISTING, EDIT_LISTING
} from '../actions/listing_actions';

import {fetchListing, fetchListings, createListing, deleteListing,
  editListing, receiveErrors
} from '../util/listing_api_util';

export default ({ getState, dispatch }) => next => action => {
  const receiveListingSuccess = listing => {
    dispatch(receiveListing(listing));
  };

  const receiveListingsSuccess = listings => {
    dispatch(receiveListings(listings));
  };

  const removeListingSuccess = listing => {
    dispatch(removeListing(listing));
  };

  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));

  switch(action.type) {
    case FETCH_LISTING:
      fetchListing(action.id, receiveListingSuccess, errorCallback);
      return next(action);
    case FETCH_LISTINGS:
      fetchListings(action.params, receiveListingsSuccess, errorCallback);
      break;
    case CREATE_LISTING:
      createListing(action.listing, receiveListingSuccess, errorCallback);
      return next(action);
    case DELETE_LISTING:
      deleteListing(action.id, removeListingSuccess, errorCallback);
      return next(action);
    case EDIT_LISTING:
      editListing(action.listing, receiveListingSuccess, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
