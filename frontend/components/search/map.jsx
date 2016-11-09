import React from 'react';
import { Link } from 'react-router';

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    // find the `<map>` node on the DOM
    const mapDOMNode = this.refs.map;

    // set the map to show SF
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // this is SF
      zoom: 13
    };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
  }

  render() {
    return (
      <div
        id='map-container'
        ref='map'>
      </div>
    );
  }
}

export default Map;
