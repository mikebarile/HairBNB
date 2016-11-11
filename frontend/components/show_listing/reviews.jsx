import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

   handleStars(rating, className) {
    let stars = [];

    if (rating === null || rating === undefined || rating === 0) {
      for (var i = 0; i < 5; i++) {
        stars.push(<img key={i} className={className} src="http://res.cloudinary.com/dsguwnfdw/image/upload/c_crop,h_68,w_68,x_5,y_2/v1478139574/Icons/Screen_Shot_2016-11-02_at_7.19.10_PM.png"/>);
      }
      return stars;
    }

    rating = (Math.round(rating * 2) / 2).toFixed(1);

    for (var i = 1; i <= rating; i++) {
      stars.push(<img key={i} className={className} src="http://res.cloudinary.com/dsguwnfdw/image/upload/c_crop,h_70,w_70,x_3,y_2/v1478139260/Icons/Screen_Shot_2016-11-02_at_7.12.47_PM.png"/>);
    }
    if (rating - Math.floor(rating) === 0.5){
      stars.push(<img key={i} className={className} src="http://res.cloudinary.com/dsguwnfdw/image/upload/c_crop,h_70,w_70,x_7/v1478139260/Icons/Screen_Shot_2016-11-02_at_7.13.12_PM.png"/>);
    }
    for (var i = stars.length; i < 5; i++) {
      stars.push(<img key={i} className={className} src="http://res.cloudinary.com/dsguwnfdw/image/upload/c_crop,h_68,w_68,x_5,y_2/v1478139574/Icons/Screen_Shot_2016-11-02_at_7.19.10_PM.png"/>);
    }
    return stars;
  }

  handleDate(date) {
    let dates = {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December"
    };

    let month = dates[date.slice(5, 7)];
    return `${month}, ${date.slice(0, 4)}`;
  }

  handleReviewCount(count) {
    if (count === 0 || count === null || count === undefined) {
      return "No Reviews";
    }
    else if (count === 1) {
      return "1 Review";
    }
    else {
      return `${count} Reviews`;
    }
  }

  handleReviews() {
    let reviews = [];
    if (this.props.currentListing.reviews === undefined) {
      return (<div></div>);
    }
    reviews = this.props.currentListing.reviews.map((review, idx) => (
      <div key={idx} className="slr-review">
        <div className="slrr-header-row">
          <img src={review.guest_image_url} className="slrr-guest-img"/>
          <div className="slrr-header-col">
            <span className="slrr-name">{review.guest_name}</span>
            <span className="slrr-date">{this.handleDate(review.date)}</span>
          </div>
        </div>
        <div className="slrr-body">
          {review.description}
        </div>
      </div>
    ));
    return reviews;
  }

  render() {
    let listing = this.props.currentListing;
    let reviews = listing.reviews;
    return (
      <div className="sl-reviews">
        <div className="sl-first-col">
          <div className="slr-header-row" >
            <span className="slr-reviews-header">{this.handleReviewCount(listing.count_reviews)}</span>
            <div className="slr-header-stars">
              {this.handleStars(listing.average_rating, "slr-header-star")}
            </div>
          </div>
          {this.handleReviews()}
        </div>
      </div>
    );
  }
}

export default withRouter(Reviews);
