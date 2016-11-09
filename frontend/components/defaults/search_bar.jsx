import React from 'react';
import { Link, withRouter } from 'react-router';
import Geosuggest from 'react-geosuggest';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {destination: ""};
    this.handleDestination = this.handleDestination.bind(this);
  }

  handleDestination(suggestion) {
    return (value) => {
      if (suggestion === true) {
        this.setState({destination: value.label});

        this.props.router.push({
          pathname: "/search",
          query: {
            destination: this.state.destination,
          }});
      }
      else {
        this.setState({destination: value});
      }
    };
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
          onChange={this.handleDestination(false)}
          onSuggestSelect={this.handleDestination(true)}
        />
      </div>
    );
  }
}

export default withRouter(SearchBar);
