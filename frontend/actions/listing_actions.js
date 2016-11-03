export const FETCH_LISTING = "FETCH_LISTING";
export const FETCH_LISTINGS = "FETCH_LISTINGS";
export const CREATE_LISTING = "CREATE_LISTING";
export const DELETE_LISTING = "DELETE_LISTING";
export const EDIT_LISTING = "EDIT_LISTING";
export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const REMOVE_LISTING = "REMOVE_LISTING";
export const RECEIVE_LISTING_ERRORS = "RECEIVE_LISTING_ERRORS";
export const CLEAR_LISTING_ERRORS = "CLEAR_LISTING_ERRORS";

export const fetchListing = (id) => ({
  type: FETCH_LISTING,
  id
});

export const fetchListings = (params) => ({
  type: FETCH_LISTINGS,
  params
});

export const createListing = (listing) => ({
  type: CREATE_LISTING,
  listing
});

export const deleteListing = (id) => ({
  type: CREATE_LISTING,
  id
});

export const editListing = (listing) => ({
  type: EDIT_LISTING,
  listing
});

export const receiveListing = (listing) => ({
  type: RECEIVE_LISTING,
  listing
});

export const receiveListings = (listings) => ({
  type: RECEIVE_LISTINGS,
  listings
});

export const removeListing = (listing) => ({
  type: REMOVE_LISTING,
  listing
});

export const receiveListingErrors = (errors) => ({
  type: RECEIVE_LISTING_ERRORS,
  errors
});

export const clearListingErrors = () => ({
  type: CLEAR_LISTING_ERRORS
});
