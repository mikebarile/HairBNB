import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';

class ShowListingHost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>HOST</div>
    );
  }
}

export default withRouter(ShowListingHost);
