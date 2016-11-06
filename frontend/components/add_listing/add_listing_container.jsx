import { connect } from 'react-redux';
import AddListing from './add_listing';
import {createListing} from '../../actions/listing_actions';

const mapStateToProps = ({myListings, session}) => ({
  currentUser: session.currentUser,
  myListings
});

const mapDispatchToProps = dispatch => ({
  createListing: (listing) => dispatch(createListing(listing))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(AddListing);
