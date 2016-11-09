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
    let mapOptions;
    if(this.props.lat !== "" && this.props.lat !== undefined) {
      mapOptions = {
        center: {lat: parseInt(this.props.lat), lng: parseInt(this.props.lng)}, // this is SF
        zoom: 13
      };
    }
    else {
      mapOptions = {
        center: {lat: 0, lng: 0}, // this is SF
        zoom: 2
      };
    }
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
