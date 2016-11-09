import React from 'react';
import { Link, withRouter } from 'react-router';
import Geosuggest from 'react-geosuggest';

class SearchBar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          destination: "",
          check_in: "",
          check_out: "",
          guests: ""
      };
      this.update = this.update.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleDestination = this.handleDestination.bind(this);
  }

  update(property) {
    console.log(this.state);
    return e => {
        this.setState({
          [property]: e.target.value
        });
    };
  }

  handleDateType(newType, margin) {
    return (e) => {
      e.target.type = newType;
    };
  }

  handleDestination(suggestion) {
    return (value) => {
      if (suggestion === true) {
        this.setState({
          destination: value.label
        });
      }
      else {
        this.setState({
          destination: value
        });
      }
    };
  }

  handleSubmit() {
    if (this.state.destination !== "") {
      this.props.router.push("/search");
    }
  }

  render() {
    return(
      <div className="home-search-bar">
        <div className="home-input-container">

          <div className="hsb-where-col">
            <span className="hsb-sub-title">Where</span>
            <Geosuggest
              onChange={this.handleDestination(false)}
              onSuggestSelect={this.handleDestination(true)}
              className="home-search-city"
              placeholder="Destination, city, address"
            />
          </div>

          <div className="hsb-when-col">
            <span className="hsb-sub-title">When</span>
            <div className="hsb-input-row">
              <input
                onChange={this.update("check_in")}
                className="home-search-date"
                type="text"
                onFocus={this.handleDateType("date")}
                placeholder="Check In"/>

              <img className="home-arrow-icon" src="https://res.cloudinary.com/dsguwnfdw/image/upload/v1478132097/Icons/Arrows-Right-icon_wgfi7w.png"/>

              <input
                onChange={this.update("check_out")}
                className="home-search-date"
                type="text"
                onFocus={this.handleDateType("date")}
                placeholder="Check Out"/>
            </div>
          </div>
        </div>

        <div className="hsb-guest-row">
          <div className="hsb-guest-col">
            <span className="hsb-sub-title">Dogs</span>
            <select className="home-search-guest" onChange={this.update("guests")}>
              <option value='1'>1 Dog</option>
              <option value='2'>2 Dogs</option>
              <option value='3'>3 Dogs</option>
              <option value='4'>4 Dogs</option>
            </select>
          </div>

          <button
            className="home-search-button"
            onClick={this.handleSubmit}>Search
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchBar);
