import { connect } from 'react-redux';
import MyListings from './my_listings';
import {fetchListing, deleteListing, editListing, clearListingErrors
} from '../../actions/listing_actions';

const mapStateToProps = ({listing, session}) => ({
  currentUser: session.currentUser,
  currentListing: listing.currentListing,
  errors: listing.errors
});

const mapDispatchToProps = dispatch => ({
  fetchListings: (id) => dispatch(fetchListing(id)),
  deleteListing: (id) => dispatch(deleteListing(id)),
  editListing: (listing) => dispatch(editListing(listing)),
  clearListingErrors: () => dispatch(clearListingErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(MyListings);
