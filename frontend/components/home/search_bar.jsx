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
        <div className="home-input-container">
          <input
            onChange={this.update("city")}
            className="home-search-city"
            type="text"
            placeholder="Where to?"/>
          <br/>

          <input
            onChange={this.update("check_in")}
            className="home-search-date"
            type="text"
            placeholder="Check in"/>
          <br/>

          <img className="home-arrow-icon" src="https://res.cloudinary.com/dsguwnfdw/image/upload/v1478132097/Icons/Arrows-Right-icon_wgfi7w.png"/>

          <input
            onChange={this.update("check_out")}
            className="home-search-date"
            type="text"
            placeholder="Check out"/>
          <br/>
        </div>

        <button
          className="home-search-button"
          onClick={this.handleSubmit}>Search
        </button>

      </div>
    );
  }
}

export default SearchBar;
