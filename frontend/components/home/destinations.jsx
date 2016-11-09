import React from 'react';
import { Link } from 'react-router';

class Destinations extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return(
      <div className="home-destinations">
        <h1 className="home-main-header">Explore the World</h1>

        <div className="home-destinations-row">
          <div className="home-destination-big london">
            <span className="home-destination-text">London</span>
          </div>

          <div className="home-destination-sub-row">
            <div className="home-destination-small los-angeles">
              <span className="home-destination-text">Los Angeles</span>
            </div>
            <div className="home-destination-small tokyo">
              <span className="home-destination-text">Tokyo</span>
            </div>
          </div>

          <div className="home-destination-sub-row">
            <div className="home-destination-small washington-dc">
              <span className="home-destination-text">Washington DC</span>
            </div>
            <div className="home-destination-small honolulu">
              <span className="home-destination-text">Honolulu</span>
            </div>
          </div>
        </div>

        <div className="home-destinations-row">
          <div className="home-destination-sub-row">
            <div className="home-destination-small paris">
              <span className="home-destination-text">Paris</span>
            </div>
            <div className="home-destination-small berlin">
              <span className="home-destination-text">Berlin</span>
            </div>
          </div>

          <div className="home-destination-big san-francisco">
            <span className="home-destination-text">San Francisco</span>
          </div>

          <div className="home-destination-sub-row">
            <div className="home-destination-small cairo">
              <span className="home-destination-text">Cairo</span>
            </div>
            <div className="home-destination-small new-york">
              <span className="home-destination-text">New York</span>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default Destinations;
