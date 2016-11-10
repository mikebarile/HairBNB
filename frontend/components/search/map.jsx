import React from 'react';
import { Link } from 'react-router';
import MarkerManager from '../../util/marker_manager';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

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
        center: {lat: parseFloat(this.props.lat), lng: parseFloat(this.props.lng)}, // this is SF
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
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.listings);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.listings);
    this._registerListeners();
  }

  _registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter({bounds});
    });
  }

  _handleMarkerClick(bench) {
    this.props.router.push(`listings/${listing.id}`);
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
