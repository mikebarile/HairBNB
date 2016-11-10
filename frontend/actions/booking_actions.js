export const FETCH_MY_TRIPS = "FETCH_MY_TRIPS";
export const FETCH_MY_RESERVATIONS = "FETCH_MY_RESERVATIONS";
export const CREATE_BOOKING = "CREATE_BOOKING";
export const DELETE_BOOKING = "DELETE_BOOKING";
export const EDIT_BOOKING = "EDIT_BOOKING";
export const RECEIVE_MY_TRIPS = "RECEIVE_MY_TRIPS";
export const RECEIVE_MY_RESERVATIONS = "RECEIVE_MY_RESERVATIONS";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
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

export const editBooking = (booking) => ({
  type: EDIT_BOOKING,
  booking
});

export const receiveBooking = (booking) => ({
  type: RECEIVE_BOOKING,
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
