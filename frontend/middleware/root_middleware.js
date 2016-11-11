import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import ListingsMiddleware from './listings_middleware';
import BookingsMiddleware from './bookings_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware, ListingsMiddleware, BookingsMiddleware
);

export default RootMiddleware;
