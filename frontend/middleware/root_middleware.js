import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import ListingsMiddleware from './listings_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware, ListingsMiddleware
);

export default RootMiddleware;
