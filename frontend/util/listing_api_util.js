export const fetchListing = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/listings/${id}`,
    success,
    error
  });
};

export const fetchListings = (params, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/listings`,
    data: {"listing": params},
    success,
    error
  });
};

export const createListing = (listing, success, error) => {
  $.ajax({
    method: 'POST',
    url: `api/session`,
    data: {"listing": listing},
    success,
    error
  });
};

export const deleteListing = (id, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/listings/${id}`,
    success,
    error
  });
};

export const editListing = (listing, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/listings/${listing.id}`,
    data: {"listing": listing},
    success,
    error
  });
};