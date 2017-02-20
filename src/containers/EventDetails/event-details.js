import React, { Component } from 'react';
import {connect} from 'react-redux';
import { loadEventDetails } from '../../actions/event-details';

class EventDetails extends Component {

  componentDidMount() {
    this.props.loadEventDetails();
  }

  render() {
    return (
      <div>
        THIS IS WHERE THE DETAILS GO
        {this.props.details.city}
      </div>
    );
  }

}

EventDetails.propTypes = {
  loadEventDetails: React.PropTypes.func,
  details: React.PropTypes.shape({
    city: React.PropTypes.string,
  }),
};

const mapStateToProps = state => ({
  details: state.details,
});

const mapDispatchToProps = {
  loadEventDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
