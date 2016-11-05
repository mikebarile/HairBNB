import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';

class Description extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAmenity(boolean) {
    return boolean ? "sl-amenity-true" : "sl-amenity-false";
  }

  render() {
    let listing = this.props.currentListing;

    return (
      <div className="sl-description">
        <div className="sl-first-col">
          <div className="sl-about-row">
            <span className="sl-about-span">About this listing</span>
            <span className="sl-description-span">{listing.description}</span>
          </div>
          <div className="sl-amenities">
            <span className="sl-section-header">Amenities</span>
            <div className="sl-amenities-cols">
              <div className="sl-amenities-col">
                <span className={this.handleAmenity(listing.dog_walks)}>Free dog walks</span>
                <span className={this.handleAmenity(listing.deluxe_bed)}>Deluxe doggy bed</span>
                <span className={this.handleAmenity(listing.house_cat)}>House cat friend</span>
                <span className={this.handleAmenity(listing.cuddle_buddy)}>Movie cuddle buddy</span>
              </div>

              <div className="sl-amenities-col">
                <span className={this.handleAmenity(listing.gourmet_food)}>Gourmet dog food</span>
                <span className={this.handleAmenity(listing.chew_toys)}>Chew toys</span>
                <span className={this.handleAmenity(listing.frisbee)}>Daily frisbee sessions</span>
                <span className={this.handleAmenity(listing.mailman)}>Mailman visits</span>
                <span className={this.handleAmenity(listing.grooming)}>Free grooming</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Description;
