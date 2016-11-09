import React from 'react';
import { Link, withRouter } from 'react-router';

class ListingItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="search-listing-item">
        <img className="search-pick-img" src="https://res.cloudinary.com/dsguwnfdw/image/upload/v1478136940/Spots/under-the-stairs-dog-bed-polished-concrete-floor-built-in-dog-bed.jpg"/>
        <div className="search-pick-description">
          <span className="search-pick-price">$294</span>
          <span className="search-pick-title">Charming post-modern kennel</span>
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

export default withRouter(ListingItem);