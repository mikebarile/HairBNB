import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';
import Geosuggest from 'react-geosuggest';

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

    let searchStyle = {
      'input': {
        width: '100%',
        height: '60px',
        padding: '0px',
        'paddingLeft': '20px',
        'paddingTop': '2px',
        'fontSize': '13px'
      },
      'input:focus': {
        'boxShadow': '0px 0px 0px',
        '-webkit-box-shadow': '0px 0px 0px',
        border: '0px'
      },
      'suggests': {
        'marginTop': '1px',
        'width': 'calc(100% + 1px)'
      },
    };

    return (
      <div className="search-bar">

        <Geosuggest
          className="search-input"
          placeholder="Where to?"
          id="top-bar"
          style={searchStyle}
        />
      </div>
    );
  }
}

export default withRouter(SearchBar);
