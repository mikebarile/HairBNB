import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  handleStars(rating, className) {
    let stars = [];
    for (var i = 1; i <= rating; i++) {
      stars.push(<img key={i} className={className} src="http://res.cloudinary.com/dsguwnfdw/image/upload/c_crop,h_70,w_70,x_3,y_2/v1478139260/Icons/Screen_Shot_2016-11-02_at_7.12.47_PM.png"/>);
    }
    for (var i = stars.length; i < 5; i++) {
      stars.push(<img key={i} className={className} src="http://res.cloudinary.com/dsguwnfdw/image/upload/c_crop,h_68,w_68,x_5,y_2/v1478139574/Icons/Screen_Shot_2016-11-02_at_7.19.10_PM.png"/>);
    }
    return stars;
  }

  render() {
    let listing = this.props.currentListing;
    let reviews = listing.reviews;

    return (
      <div className="sl-reviews">
        <div className="sl-first-col">
          <div className="slr-header-row" >
            <span className="slr-reviews-header">{listing.count_reviews} Reviews</span>
            <div className="slr-header-stars">
              {this.handleStars(listing.average_rating, "slr-header-star")}
            </div>
          </div>

          
        </div>
      </div>
    );
  }
}

export default withRouter(Reviews);
