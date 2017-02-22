import React from 'react';
import {connect} from 'react-redux';
import { loadEvents } from '../../actions/eventActions';
import EventsMap from '../../components/EventsMap/EventsMap';
import EventsList from '../../components/EventsList/EventsList';

class Home extends React.Component {
  componentDidMount() {
    this.props.loadEvents();
  }

  render() {
    if (this.props.events) {
      return (
        <div>
        <EventsMap markers={this.props.markers}/>
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
  };
};

const mapDispatchToProps = {
  loadEvents,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
