import React from 'react';
import { Link } from 'react-router';

class SpotPicks extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return(
      <div className="home-spot-picks">
        <h1 className="home-main-header">Explore Hairbnb picks</h1>

        <div className="home-picks-index">
          <div className="home-pick-index-item">
            <img className="home-pick-img" src="http://res.cloudinary.com/dsguwnfdw/image/upload/v1478136940/Spots/under-the-stairs-dog-bed-polished-concrete-floor-built-in-dog-bed.jpg"/>
            <div className="home-pick-description">
              <span className="home-pick-price">$294</span>
              <span className="home-pick-title">Charming post-modern kennel</span>
            </div>
          </div>

          <div className="home-pick-index-item">
            <img className="home-pick-img" src="http://res.cloudinary.com/dsguwnfdw/image/upload/v1478136937/Spots/_32.jpg"/>
              <div className="home-pick-description">
                <span className="home-pick-price">$164</span>
                <span className="home-pick-title">Rustic dog house with big yard</span>
              </div>
          </div>

          <div className="home-pick-index-item">
            <img className="home-pick-img" src="http://res.cloudinary.com/dsguwnfdw/image/upload/c_crop,h_330,w_540/v1478136942/Spots/ee58f1d8650eb2c5e208930bb711578e.jpg"/>
              <div className="home-pick-description">
                <span className="home-pick-price">$450</span>
                <span className="home-pick-title">Chic innercity batchelor pad</span>
              </div>
          </div>
        </div>
      </div>

    );
  }
}

export default SpotPicks;
