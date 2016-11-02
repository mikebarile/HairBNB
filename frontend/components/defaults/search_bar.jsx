import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: ""};
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();
    this.setState({query: e.target.value});
  }

  render() {
    return (
      <div className="search-bar">
        <img className = "magnifier" src="/assets/magnifier.png"/>
        <input
          className="search-input"
          type="text"
          onChange={this.handleSearch}
          value={this.state.query}
          placeholder="Where to?"
        />
      </div>
    );
  }
}

export default withRouter(SearchBar);
