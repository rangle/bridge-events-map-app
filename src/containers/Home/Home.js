import React from 'react';
import {connect} from 'react-redux';
import { loadEvents } from '../../actions/eventActions';
import { getCurrentGeoLocation } from '../../actions/geolocationActions';
import EventsMap from '../../components/EventsMap/EventsMap';
import EventsList from '../../components/EventsList/EventsList';

class Home extends React.Component {
  componentDidMount() {
    this.props.getCurrentGeoLocation();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentLocation.lat !== nextProps.currentLocation.lat) {
      const coord = `${nextProps.currentLocation.lat}, ${nextProps.currentLocation.lng}`;
      const position = coord.split(',').join('%2C');
      this.props.loadEvents({
        location: 'Toronto',
        where: position,
        within: 25,
        date: 'Future',
        page_size: '100',
      });
    }
  }

  render() {
    if (this.props.events) {
      return (
        <div>
        <EventsMap markers={this.props.markers} currentLocation={this.props.currentLocation}/>
        <EventsList events={this.props.events} />
      </div>
      );
    }
    return null;
  }
}

Home.propTypes = {
  events: React.PropTypes.array,
  markers: React.PropTypes.array,
  loadEvents: React.PropTypes.func.isRequired,
  getCurrentGeoLocation: React.PropTypes.func.isRequired,
  currentLocation: React.PropTypes.object,
};

const getFormattedMarkers = (events) => {
  const markers = events.map((event, index)=> {
    return {
      position: {
        lat: Number(event.latitude),
        lng: Number(event.longitude),
      },
      key: index,
      defaultAnimation: 2,
    };
  });
  return markers;
};

const mapStateToProps = state => {
  let formattedEvents = [];
  if (Object.keys(state.events).length !== 0 && state.events.constructor === Object) {
    formattedEvents = getFormattedMarkers(state.events.event);
  }

  return {
    events: state.events.event,
    markers: formattedEvents,
    currentLocation: state.currentLocation,
  };
};

const mapDispatchToProps = {
  loadEvents,
  getCurrentGeoLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
