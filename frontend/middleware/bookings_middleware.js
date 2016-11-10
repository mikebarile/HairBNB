import { receiveMyTrips, receiveMyReservations, receiveNewBooking,
  removeTrip, removeReservation, receiveBookingErrors, receiveEditedTrip,
  receiveEditedReservation, FETCH_MY_TRIPS, FETCH_MY_RESERVATIONS,
  CREATE_BOOKING, DELETE_TRIP, DELETE_RESERVATION, EDIT_TRIP, EDIT_RESERVATION
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

  const removeTripSuccess = booking => {
    dispatch(removeTrip(booking));
  };

  const removeReservationSuccess = booking => {
    dispatch(removeReservation(booking));
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
    case DELETE_TRIP:
      deleteBooking(action.id, removeTripSuccess);
      return next(action);
    case DELETE_RESERVATION:
      deleteBooking(action.id, removeReservationSuccess);
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
