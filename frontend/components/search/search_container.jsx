import { connect } from 'react-redux';
import Search from './search';
import {fetchMyListings} from '../../actions/listing_actions';

const mapStateToProps = ({listingSearch, session}) => ({
  currentUser: session.currentUser,
  listingSearch
});

const mapDispatchToProps = dispatch => ({
  fetchMyListings: (params) => dispatch(fetchMyListings(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Search);
