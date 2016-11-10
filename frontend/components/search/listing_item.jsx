import React from 'react';
import { Link, withRouter } from 'react-router';

class ListingItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let listing = this.props.listing;
    if (listing === null || listing === undefined) {
      return ( <div></div> );
    }
    else {
      return (
        <div className="search-listing-item">
          <img className="search-pick-img" src={listing.image_url}/>
          <div className="search-pick-description">
            <span className="search-pick-price">${listing.price}</span>
            <span className="search-pick-title">{listing.title}</span>
          </div>
          <div className="search-pick-reviews">
            <img className="search-pick-star" src="https://res.cloudinary.com/dsguwnfdw/image/upload/c_crop,h_70,w_70,x_3,y_2/v1478139260/Icons/Screen_Shot_2016-11-02_at_7.12.47_PM.png"/>
            <img className="search-pick-star" src="https://res.cloudinary.com/dsguwnfdw/image/upload/c_crop,h_70,w_70,x_3,y_2/v1478139260/Icons/Screen_Shot_2016-11-02_at_7.12.47_PM.png"/>
            <img className="search-pick-star" src="https://res.cloudinary.com/dsguwnfdw/image/upload/c_crop,h_70,w_70,x_3,y_2/v1478139260/Icons/Screen_Shot_2016-11-02_at_7.12.47_PM.png"/>
            <img className="search-pick-star" src="https://res.cloudinary.com/dsguwnfdw/image/upload/c_crop,h_70,w_70,x_3,y_2/v1478139260/Icons/Screen_Shot_2016-11-02_at_7.12.47_PM.png"/>
            <img className="search-pick-star" src="https://res.cloudinary.com/dsguwnfdw/image/upload/c_crop,h_70,w_70,x_3,y_2/v1478139260/Icons/Screen_Shot_2016-11-02_at_7.12.47_PM.png"/>
            <span className="search-pick-num-reviews">164 reviews</span>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(ListingItem);
