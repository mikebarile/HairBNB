import React from 'react';
import { Link } from 'react-router';

class Destinations extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return(
      <div className="home-destinations">
        <h1 className="home-main-header">Explore the world</h1>

        <div className="home-destinations-row">
          <div className="home-destination-big london">London</div>

          <div className="home-destination-sub-row">
            <div className="home-destination-small los-angeles">Los Angeles</div>
            <div className="home-destination-small tokyo">Tokyo</div>
          </div>

          <div className="home-destination-sub-row">
            <div className="home-destination-small washington-dc">Washington DC</div>
            <div className="home-destination-small honolulu">Honolulu</div>
          </div>
        </div>

        <div className="home-destinations-row">
          <div className="home-destination-sub-row">
            <div className="home-destination-small paris">Paris</div>
            <div className="home-destination-small berlin">Berlin</div>
          </div>

          <div className="home-destination-big san-francisco">San Francisco</div>

          <div className="home-destination-sub-row">
            <div className="home-destination-small cairo">Cairo DC</div>
            <div className="home-destination-small new-york">New York</div>
          </div>
        </div>

      </div>

    );
  }
}

export default Destinations;
