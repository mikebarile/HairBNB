import React from 'react';
import { Link } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchMyListings({"host_id": this.props.currentUser.id});
  }

  componentDidUpdate() {
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

  render() {

    return (
      <div className="search">
        <div className="s-form-col">
          <div className="s-form-row">

          </div>

          <div className="s-listings">
            <div className="s-listings-row">
              <div className="s-listing-item">
                
              </div>

              <div className="s-listing-item">

              </div>
            </div>


          </div>
        </div>

        <div className="s-map-col">

        </div>
      </div>
    );
  }
}

export default Search;
