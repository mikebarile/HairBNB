import React from 'react';
import { Link } from 'react-router';

class MyListings extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchMyTrips({"guest_id": this.props.currentUser.id});
  }

  componentDidUpdate() {
    if(this.props.currentUser === null){
      this.props.router.replace('/home');
    }
    this.props.fetchMyTrips({"guest_id": this.props.currentUser.id});
  }

  handleLocation(listing) {
    if (listing.country === "United States") {
      return `${listing.city}, ${listing.state}`;
    }
    else {
      return `${listing.city}, ${listing.country}`;
    }
  }

  handleLastListing(idx, numListings) {
    if (idx === numListings - 1) {
      return "ml-listing-item ml-listing-last";
    }
    else {
      return "ml-listing-item";
    }
  }

  imgStyle (imageUrl) {
    return ({background:
      `url('${imageUrl}') center center / cover no-repeat`});
  }

  render() {
    let numListings = this.props.myTrips.length;

    return (
      <div className="my-listings">
        <div className="ml-columns-container">
          <div className="ml-listings-column">
            <div className="ml-listed-box">
              <span className="ml-listed-span">Your trips</span>
            </div>
            {this.props.myTrips.map((booking, idx) => (
              <div className={this.handleLastListing(idx, numListings)} key={booking.id}>
                <div style={this.imgStyle(booking.listing.image_url)} className="ml-listing-image"></div>
                <div className="ml-description-column">
                  <span className="ml-description-title">{booking.listing.title}</span>
                  <span className="ml-description-location">{this.handleLocation(booking.listing)}</span>
                  <span className="ml-description-location">{booking.check_in} - {booking.check_out}</span>
                  <Link to={`/listings/${booking.listing.id}`} className="ml-description-preview">Preview</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}



export default MyListings;
