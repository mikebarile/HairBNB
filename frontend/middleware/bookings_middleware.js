import { receiveMyTrips, receiveMyReservations, receiveNewBooking,
  removeBooking, receiveBookingErrors, receiveEditedTrip,
  receiveEditedReservation, FETCH_MY_TRIPS, FETCH_MY_RESERVATIONS,
  CREATE_BOOKING, DELETE_BOOKING, EDIT_TRIP, EDIT_RESERVATION
} from '../actions/booking_actions';

import {fetchBookings, createBooking, deleteBooking, editBooking
} from '../util/booking_api_util';

export default ({ getState, dispatch }) => next => action => {
  const receiveNewBookingSuccess = booking => {
    dispatch(receiveNewBooking(booking));
  };

  const receiveEditedTripSuccess = booking => {
    dispatch(receiveEditedTrip(booking));
  };

  const receiveEditedReservationSuccess = booking => {
    dispatch(receiveEditedReservation(booking));
  };

  const receiveMyTripsSuccess = bookings => {
    dispatch(receiveMyTrips(bookings));
  };

  const receiveMyReservationsSuccess = bookings => {
    dispatch(receiveMyReservations(bookings));
  };

  const removeBookingSuccess = booking => {
    dispatch(removeBooking(booking));
  };

  const errorCallback = xhr => dispatch(receiveBookingErrors(xhr.responseJSON));

  switch(action.type) {
    case FETCH_MY_TRIPS:
      fetchBookings(action.params, receiveMyTripsSuccess);
      return next(action);
    case FETCH_MY_RESERVATIONS:
      fetchBookings(action.params, receiveMyReservationsSuccess);
      return next(action);
    case CREATE_BOOKING:
      createBooking(action.booking, receiveNewBookingSuccess);
      return next(action);
    case DELETE_BOOKING:
      deleteBooking(action.id, removeBookingSuccess);
      return next(action);
    case EDIT_TRIP:
      editBooking(action.booking, receiveEditedTripSuccess);
      return next(action);
    case EDIT_RESERVATION:
      editBooking(action.booking, receiveEditedReservationSuccess);
      return next(action);
    default:
      return next(action);
  }
};
