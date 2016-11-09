import { connect } from 'react-redux';
import Search from './search';
import {fetchSearchListings} from '../../actions/listing_actions';

const mapStateToProps = ({searchListings, session}) => ({
  currentUser: session.currentUser,
  searchListings
});

const mapDispatchToProps = dispatch => ({
  fetchSearchListings: (params) => dispatch(fetchSearchListings(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Search);
