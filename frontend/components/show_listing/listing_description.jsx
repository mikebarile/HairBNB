import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.prepRules = this.prepRules.bind(this);
  }

  handleAmenity(boolean) {
    return boolean ? "sl-amenity-true" : "sl-amenity-false";
  }

  prepRules() {
    let rules = [];
    let listing = this.props.currentListing;
    if (listing.barking) {
      rules.push("No barking");
    }
    if (listing.indoor_pee) {
      rules.push("No peeing indoors");
    }
    if (listing.indoor_poop) {
      rules.push("No pooping indoors");
    }
    if (listing.whining) {
      rules.push("No whining");
    }
    if (listing.shedding) {
      rules.push("No shedding");
    }
    if (listing.begging) {
      rules.push("No begging for food");
    }
    return rules;
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
                <span className={this.handleAmenity(listing.cuddle_buddy)}>Cuddle buddy</span>
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

          <div className="sl-rules">
            <span className="sl-section-header">House Rules</span>
            <div className="sl-rules-col">
              {this.prepRules().map((rule, idx) => <span className="sl-rule" key={idx}>{rule}</span>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Description;
