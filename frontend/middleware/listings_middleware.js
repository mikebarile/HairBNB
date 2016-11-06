import { receiveMyListings, receiveListing, receiveNewListing, removeListing,
  receiveListingErrors, FETCH_LISTING, FETCH_MY_LISTINGS, CREATE_LISTING,
  DELETE_LISTING, EDIT_LISTING
} from '../actions/listing_actions';

import {fetchListing, fetchListings, createListing, deleteListing,
  editListing
} from '../util/listing_api_util';

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

  const errorCallback = xhr => dispatch(receiveListingErrors(xhr.responseJSON));

  switch(action.type) {
    case FETCH_LISTING:
      fetchListing(action.id, receiveListingSuccess, errorCallback);
      return next(action);
    case FETCH_MY_LISTINGS:
      fetchListings(action.params, receiveMyListingsSuccess, errorCallback);
      break;
    case CREATE_LISTING:
      createListing(action.listing, receiveNewListingSuccess, errorCallback);
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
