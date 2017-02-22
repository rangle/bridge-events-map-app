import React from 'react';
import {connect} from 'react-redux';
import { loadEvents } from '../../actions/eventActions';
import EventsMap from '../../components/EventsMap/EventsMap';
import EventsList from '../../components/EventsList/EventsList';
// import MapTest from '../../components/MapTest/MapTest';

class Home extends React.Component {
  componentDidMount() {
    this.props.loadEvents();
  }

  render() {
    if (this.props.events) {
      return (
        <div>
        <EventsMap events={this.props.events}/>
        <EventsList events={this.props.events} />
        {/* <MapTest events={this.props.events}/> */}
        {/* <EventsMap events={this.props.events}/> */}
      </div>
      );
    }
    return null;
  }
}

Home.propTypes = {
  events: React.PropTypes.array,
  loadEvents: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  events: state.events.event,
});

const mapDispatchToProps = {
  loadEvents,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
