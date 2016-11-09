import React from 'react';
import { Link } from 'react-router';
import ListingItem from './listing_item';
import Map from './map';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check_in: null,
      check_out: null
    };
    this.update = this.update.bind(this);
    this.handleDateType = this.handleDateType.bind(this);
  }

  componentWillMount() {
  let query = this.props.location.query;
  }

  componentDidUpdate() {
    let query = this.props.location.query;
    if(this.props.currentUser === null){
      this.props.router.replace('/home');
    }
  }

  handleLocation(listing) {
    if (listing.country === "United States") {
      return `${listing.city}, ${listing.state}`;
    }
    else {
      return `${listing.city}, ${listing.country}`;
    }
  }

  imgStyle (imageUrl) {
    return ({background:
      `url('${imageUrl}') center center / cover no-repeat`});
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  handleDateType(newType, margin) {
    return (e) => {
      e.target.type = newType;
    };
  }

  render() {

    return (
      <div className="search">
        <div className="s-form-col">
          <div className="s-form-row">
            <span className="s-dates-title">Dates</span>
              <input
                onChange={this.update("check_in")}
                className="s-date-input"
                type="text"
                onFocus={this.handleDateType("date")}
                placeholder="Check In"/>
              <input
                onChange={this.update("check_out")}
                className="s-date-input"
                type="text"
                onFocus={this.handleDateType("date")}
                placeholder="Check In"/>
              <select className="s-guest-input">
                <option value='1'>1 Dog</option>
                <option value='2'>2 Dogs</option>
                <option value='3'>3 Dogs</option>
                <option value='4'>4 Dogs</option>
              </select>
          </div>

          <div className="s-listings">
            <div className="s-listings-row">
              <ListingItem/>
              <ListingItem/>
            </div>

            <div className="s-listings-row">
              <ListingItem/>
              <ListingItem/>
            </div>

            <div className="s-listings-row">
              <ListingItem/>
              <ListingItem/>
            </div>

            <div className="s-listings-row">
              <ListingItem/>
              <ListingItem/>
            </div>

            <div className="s-listings-row">
              <ListingItem/>
              <ListingItem/>
            </div>

            <div className="s-listings-row">
              <ListingItem/>
              <ListingItem/>
            </div>

            <div className="s-listings-row">
              <ListingItem/>
              <ListingItem/>
            </div>

            <div className="s-listings-row">
              <ListingItem/>
              <ListingItem/>
            </div>

            <div className="s-listings-row">
              <ListingItem/>
              <ListingItem/>
            </div>

          </div>
        </div>

        <div className="s-map-col">
          <Map
            lat={this.props.location.query.lat}
            lng={this.props.location.query.lng}/>
        </div>
      </div>
    );
  }
}

export default Search;
