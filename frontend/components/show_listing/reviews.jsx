import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let listing = this.props.currentListing;

    return (
      <div className="sl-reviews">
        REVIEWS
      </div>
    );
  }
}

export default withRouter(Reviews);
