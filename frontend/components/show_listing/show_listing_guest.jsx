import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';

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
          <div className="sl-first_col"></div>
          <div className="sl-second-col"></div>
        </div>

      </div>
    );
  }
}

export default withRouter(ShowListingGuest);
