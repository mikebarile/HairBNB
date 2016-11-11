import React from 'react';
import { Link, withRouter } from 'react-router';

class Destinations extends React.Component {
  constructor(props) {
      super(props);
      this.pushDestination = this.pushDestination.bind(this);
  }

  pushDestination (url) {
    return (e) => {
      e.preventDefault();
      this.props.router.push(url);
    };
  }

  render() {
    return(
      <div className="home-destinations">
        <h1 className="home-main-header">Explore the World</h1>

        <div className="home-destinations-row">
          <div className="home-destination-big london" onClick={this.pushDestination('/search?lat=51.5073509&lng=-0.12775829999998223')}>
            <span className="home-destination-text">London</span>
          </div>

          <div className="home-destination-sub-row">
            <div className="home-destination-small los-angeles" onClick={this.pushDestination('/search?lat=34.0522342&lng=-118.2436849')}>
              <span className="home-destination-text">Los Angeles</span>
            </div>
            <div className="home-destination-small tokyo" onClick={this.pushDestination('/search?lat=35.6894875&lng=139.69170639999993')}>
              <span className="home-destination-text">Tokyo</span>
            </div>
          </div>

          <div className="home-destination-sub-row">
            <div className="home-destination-small washington-dc" onClick={this.pushDestination('/search?lat=38.9071923&lng=-77.03687070000001')}>
              <span className="home-destination-text">Washington DC</span>
            </div>
            <div className="home-destination-small honolulu" onClick={this.pushDestination('/search?lat=21.3069444&lng=-157.85833330000003')}>
              <span className="home-destination-text">Honolulu</span>
            </div>
          </div>
        </div>

        <div className="home-destinations-row">
          <div className="home-destination-sub-row">
            <div className="home-destination-small paris" onClick={this.pushDestination('/search?lat=48.856614&lng=2.3522219000000177')}>
              <span className="home-destination-text">Paris</span>
            </div>
            <div className="home-destination-small berlin" onClick={this.pushDestination('/search?lat=52.52000659999999&lng=13.404953999999975')}>
              <span className="home-destination-text">Berlin</span>
            </div>
          </div>

          <div className="home-destination-big san-francisco" onClick={this.pushDestination('/search?lat=37.7749295&lng=-122.41941550000001')}>
            <span className="home-destination-text">San Francisco</span>
          </div>

          <div className="home-destination-sub-row">
            <div className="home-destination-small cairo" onClick={this.pushDestination('/search?lat=30.1197986&lng=31.537000300000045')}>
              <span className="home-destination-text">Cairo</span>
            </div>
            <div className="home-destination-small new-york" onClick={this.pushDestination('/search?lat=40.7127837&lng=-74.00594130000002')}>
              <span className="home-destination-text">New York</span>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default withRouter(Destinations);
