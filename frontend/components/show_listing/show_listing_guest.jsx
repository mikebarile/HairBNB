import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';

class ShowListingGuest extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>GUEST</div>
    );
  }
}

export default withRouter(ShowListingGuest);
