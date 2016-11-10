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
    console.log(this.props);
    let listings = this.props.searchListings;

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
              <ListingItem listing={listings[0]}/>
              <ListingItem listing={listings[1]}/>
            </div>

            <div className="s-listings-row">
              <ListingItem listing={listings[2]}/>
              <ListingItem listing={listings[3]}/>
            </div>

            <div className="s-listings-row">
              <ListingItem listing={listings[4]}/>
              <ListingItem listing={listings[5]}/>
            </div>

            <div className="s-listings-row">
              <ListingItem listing={listings[6]}/>
              <ListingItem listing={listings[7]}/>
            </div>

            <div className="s-listings-row">
              <ListingItem listing={listings[8]}/>
              <ListingItem listing={listings[9]}/>
            </div>

            <div className="s-listings-row">
              <ListingItem listing={listings[10]}/>
              <ListingItem listing={listings[11]}/>
            </div>

            <div className="s-listings-row">
              <ListingItem listing={listings[12]}/>
              <ListingItem listing={listings[13]}/>
            </div>

            <div className="s-listings-row">
              <ListingItem listing={listings[14]}/>
              <ListingItem listing={listings[15]}/>
            </div>

            <div className="s-listings-row">
              <ListingItem listing={listings[16]}/>
              <ListingItem listing={listings[17]}/>
            </div>

          </div>
        </div>

        <div className="s-map-col">
          <Map
            lat={this.props.location.query.lat}
            lng={this.props.location.query.lng}
            listings={listings}
            updateFilter={this.props.updateFilter}/>
        </div>
      </div>
    );
  }
}

export default Search;
