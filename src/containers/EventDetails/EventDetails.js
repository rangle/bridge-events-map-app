import React, { Component } from 'react';
import {connect} from 'react-redux';
import { loadEventDetails } from '../../actions/eventDetailsActions';
import EventDetailsComponent from '../../components/EventDetails/EventDetailsComponent';

class EventDetails extends Component {

  componentDidMount() {
    // Put ID into the action
    this.props.loadEventDetails(this.props.params.id);
  }

  render() {
    if (this.props.details) {
      return (
        <div>
          <EventDetailsComponent title={this.props.details.title}
            city={this.props.details.city} />
        </div>
      );
    }
    return null;
  }
}

EventDetails.propTypes = {
  params: React.PropTypes.shape({
    id: React.PropTypes.string,
  }),
  loadEventDetails: React.PropTypes.func,
  details: React.PropTypes.shape({
    city: React.PropTypes.string,
    title: React.PropTypes.string,
  }),
};

const mapStateToProps = state => ({
  details: state.details,
});

const mapDispatchToProps = {
  loadEventDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
