import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';
import BookListing from './book_listing';
import Description from './listing_description';

class ShowListingGuest extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let listing = this.props.currentListing;
    let imgStyle = {
      backgroundImage: `url('${listing.image_url}')`
    };

    let location;
    if (listing.country === "United States") {
      location = `${listing.city}, ${listing.state}, ${listing.country}`;
    }
    else {
      location = `${listing.city}, ${listing.country}`;
    }

    return (
      <div className="show-listing">
        <div className="sl-image" style={imgStyle}>
          <div className="sl-img-columns-container">

            <div className="sl-img-first-col">
              <div className="sl-title-row">
                <div className="sl-title-col">
                  <span className="sl-title">{listing.title}</span>
                  <div className="sl-sub-title-row">
                    <span className="sl-sub-title slst-first">{location}</span>
                    <span className="sl-sub-title">·</span>
                    <img className="sl-star" src="https://res.cloudinary.com/dsguwnfdw/image/upload/c_crop,h_70,w_70,x_3,y_2/v1478139260/Icons/Screen_Shot_2016-11-02_at_7.12.47_PM.png"/>
                    <img className="sl-star" src="https://res.cloudinary.com/dsguwnfdw/image/upload/c_crop,h_70,w_70,x_3,y_2/v1478139260/Icons/Screen_Shot_2016-11-02_at_7.12.47_PM.png"/>
                    <img className="sl-star" src="https://res.cloudinary.com/dsguwnfdw/image/upload/c_crop,h_70,w_70,x_3,y_2/v1478139260/Icons/Screen_Shot_2016-11-02_at_7.12.47_PM.png"/>
                    <img className="sl-star" src="https://res.cloudinary.com/dsguwnfdw/image/upload/c_crop,h_70,w_70,x_3,y_2/v1478139260/Icons/Screen_Shot_2016-11-02_at_7.12.47_PM.png"/>
                    <img className="sl-star" src="https://res.cloudinary.com/dsguwnfdw/image/upload/c_crop,h_70,w_70,x_3,y_2/v1478139260/Icons/Screen_Shot_2016-11-02_at_7.12.47_PM.png"/>
                    <span className="sl-sub-title">100 reviews</span>
                  </div>
                </div>

                <div className="sl-host-col">
                  <img src={listing.host_image_url} className="sl-host-img"/>
                  <span className="sl-host-name">{listing.host_first_name}</span>
                </div>
              </div>
            </div>
            <div className="sl-dummy-col"></div>
            <div className="sl-img-second-col">
              <div className="sl-price-container">
                <span className="sl-price">
                  <span className="sl-dollar-sign">$</span>{listing.price}
                </span>
                <span className="sl-per-night">Per Night</span>
              </div>
            </div>

          </div>
        </div>

        <div className="sl-columns-container">
          <div className="sl-first_col">
            <div className="sl-title-row">
              <div className="sl-title-col">
                <span className="sl-title">{listing.title}</span>
                <div className="sl-sub-title-row">
                  <span className="sl-sub-title slst-first">{location}</span>
                  <span className="sl-sub-title">·</span>
                  <img className="sl-star" src="https://res.cloudinary.com/dsguwnfdw/image/upload/c_crop,h_70,w_70,x_3,y_2/v1478139260/Icons/Screen_Shot_2016-11-02_at_7.12.47_PM.png"/>
                  <img className="sl-star" src="https://res.cloudinary.com/dsguwnfdw/image/upload/c_crop,h_70,w_70,x_3,y_2/v1478139260/Icons/Screen_Shot_2016-11-02_at_7.12.47_PM.png"/>
                  <img className="sl-star" src="https://res.cloudinary.com/dsguwnfdw/image/upload/c_crop,h_70,w_70,x_3,y_2/v1478139260/Icons/Screen_Shot_2016-11-02_at_7.12.47_PM.png"/>
                  <img className="sl-star" src="https://res.cloudinary.com/dsguwnfdw/image/upload/c_crop,h_70,w_70,x_3,y_2/v1478139260/Icons/Screen_Shot_2016-11-02_at_7.12.47_PM.png"/>
                  <img className="sl-star" src="https://res.cloudinary.com/dsguwnfdw/image/upload/c_crop,h_70,w_70,x_3,y_2/v1478139260/Icons/Screen_Shot_2016-11-02_at_7.12.47_PM.png"/>
                  <span className="sl-sub-title">100 reviews</span>
                </div>
              </div>

              <div className="sl-host-col">
                <img src={listing.host_image_url} className="sl-host-img"/>
                <span className="sl-host-name">{listing.host_first_name}</span>
              </div>
            </div>

            <Description
              currentListing={listing}
              errors={this.props.errors}/>
          </div>

          <div className="sl-dummy-col"></div>

          <div className="sl-second-col">
            <BookListing
              currentListing={listing}
              currentUser={this.props.currentUser}
              errors={this.props.errors}/>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ShowListingGuest);
