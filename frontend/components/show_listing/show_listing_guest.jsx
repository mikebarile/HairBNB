import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';
import BookListing from './book_listing';

class ShowListingGuest extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let listing = this.props.currentListing;
    let imgStyle = {
      backgroundImage: `url('${listing.image_url}')`
    };

    return (
      <div className="show-listing">
        <div className="sl-image" style={imgStyle}>
          <div className="sl-columns-container">

            <div className="sl-img-first_col"></div>

            <div className="sl-img-second-col">
              <div className="sl-price-container">
                <span className="sl-price">
                  <span className="sl-dollar-sign">$</span>{listing.price}
                </span>
                <span className="sl-per-night">Per Night</span>
              </div>
            </div>

          </div>
        </div>

        <div className="sl-columns-container">
          <div className="sl-first_col">

          </div>

          <div className="sl-second-col">
            <BookListing
              currentListing={listing}
              currentUser={this.props.currentUser}
              errors={this.props.errs}/>
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(ShowListingGuest);
