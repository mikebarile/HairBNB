export const FETCH_MY_TRIPS = "FETCH_MY_TRIPS";
export const FETCH_MY_RESERVATIONS = "FETCH_MY_RESERVATIONS";
export const CREATE_BOOKING = "CREATE_BOOKING";
export const DELETE_BOOKING = "DELETE_BOOKING";
export const EDIT_TRIP = "EDIT_TRIP";
export const EDIT_RESERVATION = "EDIT_RESERVATION";
export const RECEIVE_MY_TRIPS = "RECEIVE_MY_TRIPS";
export const RECEIVE_MY_RESERVATIONS = "RECEIVE_MY_RESERVATIONS";
export const RECEIVE_NEW_BOOKING = "RECEIVE_NEW_BOOKING";
export const RECEIVE_EDITED_TRIP = "RECEIVE_EDITED_TRIP";
export const RECEIVE_EDITED_RESERVATION = "RECEIVE_EDITED_RESERVATION";
export const REMOVE_BOOKING = "REMOVE_BOOKING";
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";
export const CLEAR_BOOKING_ERRORS = "CLEAR_BOOKING_ERRORS";
export const CLEAR_STATE = "CLEAR_STATE";

export const fetchMyTrips = (params) => ({
  type: FETCH_MY_TRIPS,
  params
});

export const fetchMyReservations = (params) => ({
  type: FETCH_MY_RESERVATIONS,
  params
});

export const createBooking = (booking, router) => ({
  type: CREATE_BOOKING,
  booking,
  router
});

export const deleteBooking = (id) => ({
  type: CREATE_BOOKING,
  id
});

export const editTrip = (booking) => ({
  type: EDIT_TRIP,
  booking
});

export const editReservation = (booking) => ({
  type: EDIT_RESERVATION,
  booking
});

export const receiveNewBooking = (booking) => ({
  type: RECEIVE_NEW_BOOKING,
  booking
});

export const receiveEditedTrip = (booking) => ({
  type: RECEIVE_EDITED_TRIP,
  booking
});

export const receiveEditedReservation = (booking) => ({
  type: RECEIVE_EDITED_RESERVATION,
  booking
});

export const receiveMyTrips = (bookings) => ({
  type: RECEIVE_MY_TRIPS,
  bookings
});

export const receiveMyReservations = (bookings) => ({
  type: RECEIVE_MY_RESERVATIONS,
  bookings
});

export const removeBooking = (booking) => ({
  type: REMOVE_BOOKING,
  booking
});

export const receiveBookingErrors = (errors) => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
});

export const clearBookingErrors = () => ({
  type: CLEAR_BOOKING_ERRORS
});

export const clearState = () => ({
  type: CLEAR_STATE
});
