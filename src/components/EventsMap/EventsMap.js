import React from 'react';
import MainGoogleMap from '../MainGoogleMap/MainGoogleMap';

export default class EventsMap extends React.Component {

  constructor() {
    super();

    this.state = {
      markers: [],
    };
  }

  componentDidMount() {
    this.getMarkers();
  }


  getMarkers = this.getMarkers.bind(this);

  getMarkers() {
    const markers = [];
    if (this.props.events) {
      this.props.events.map((event, index) => {
        markers.push({
          position: {
            lat: Number(event.latitude),
            lng: Number(event.longitude),
          },
          key: index,
          defaultAnimation: 2,
        });
      });
    }
    // return markers;
    this.setState({
	     markers: markers,
	  });
  }


  render() {
    if (this.state.markers) {
      return (
        <div style={{position: 'absolute', width: '100%', height: '100%'}}>

          <MainGoogleMap
            containerElement={
              <div style={{ height: '600px' }} />
            }
            mapElement={
              <div style={{ height: '600px' }} />
            }
            onMapLoad={this.handleMapLoad}
            markers={this.state.markers}
            // markers={markers}
            onMarkerRightClick={this.handleMarkerRightClick}
          />

        </div>
      );
    }
    return null;
  }

  handleMapLoad = this.handleMapLoad.bind(this);
  handleMarkerRightClick = this.handleMarkerRightClick.bind(this);

  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }

  handleMarkerRightClick(targetMarker) {
    const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
    this.setState({
      markers: nextMarkers,
    });
  }
}

EventsMap.propTypes = {
  events: React.PropTypes.array,
};
