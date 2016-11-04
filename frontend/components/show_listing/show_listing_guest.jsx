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
        <div className="show-listing-image" style={imgStyle}>
        </div>
      </div>
    );
  }
}

export default withRouter(ShowListingGuest);
