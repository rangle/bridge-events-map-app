import React from 'react';
import {connect} from 'react-redux';
import { loadEvents } from '../../actions/eventActions';

class Home extends React.Component {
  componentDidMount() {
    this.props.loadEvents();
  }

  render() {
    if (this.props.events) {
      return (
      <div>{this.props.events.map(event => <p key={event.id}>{event.title}</p>)}</div>
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
