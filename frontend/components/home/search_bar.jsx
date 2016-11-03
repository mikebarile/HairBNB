import React from 'react';
import { Link } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          city: "",
          check_in: "",
          check_out: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  handleSubmit() {

  }

  render() {
    return(
      <div className="home-search-bar">

        <input
          onChange={this.update("city")}
          className="home-search-city"
          type="text"
          placeholder="Where to?"/>
        <br/>

        <input
          onChange={this.update("check_in")}
          className="home-search-city"
          type="text"
          placeholder="Check in"/>
        <br/>

        <input
          onChange={this.update("check_out")}
          className="home-search-city"
          type="text"
          placeholder="Check out"/>
        <br/>

        <button
          className="home-search-button"
          onClick={this.handleSubmit}>Search
        </button>

      </div>
    );
  }
}

export default SearchBar;
