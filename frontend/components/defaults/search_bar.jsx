import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Searchbar!
      </div>
    );
  }
}

export default withRouter(SearchBar);
