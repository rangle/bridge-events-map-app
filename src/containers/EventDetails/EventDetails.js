import React, { Component } from 'react';
import {connect} from 'react-redux';
import { loadEventDetails } from '../../actions/eventDetailsActions';
import { loadEvents } from '../../actions/eventActions';
import RecommendedEvents from '../../components/RecommendedEvents/RecommendedEvents';
import EventDetailsComponent from '../../components/EventDetails/EventDetailsComponent';
import CommentForm from '../../components/CommentForm/CommentForm';
import { addComment } from '../../actions/commentActions';

class EventDetails extends Component {

  componentDidMount() {
    // Put ID into the action
    this.props.loadEventDetails(this.props.params.id);
  }

  /* I need this function for React router links. When clicking on a links
     the page is rerendered but componentDidMount is not called. Use componentWillReceiveProps
     to call loadEventDetails if a different event has been chosen*/
  componentWillReceiveProps(nextProps) {
    const nextAccountId = nextProps.params.id;
    if (nextAccountId !== this.props.params.id) {
      this.props.loadEventDetails(nextProps.params.id);
    }
    if (this.props.details !== nextProps.details) {
      this.props.loadEvents({
        location: nextProps.details.city,
        page_size: 3,
        category: nextProps.details.categories.category[0].id,
        venue_id: nextProps.details.venue_id,
      });
    }
  }

  render() {
    const { commentForm } = this.props;
    const handleCommentSubmit = e => {
      e.preventDefault();
      this.props.addComment(commentForm.values.commentTextarea);
      commentForm.values.commentTextarea = '';
    };
    let recommended = null;
    if (this.props.events) {
      recommended = <RecommendedEvents events={this.props.events} />;
    }
    if (this.props.details) {
      return (
        <div>
          <EventDetailsComponent
            title={this.props.details.title}
            city={this.props.details.city}
          />
          <CommentForm handleAddComment={ handleCommentSubmit }/>
          {recommended}
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
  loadEvents: React.PropTypes.func,
  loadRecommendedEvents: React.PropTypes.func,
  details: React.PropTypes.shape({
    city: React.PropTypes.string,
    title: React.PropTypes.string,
    categories: React.PropTypes.obj,
    venue_id: React.PropTypes.string,
  }),
  events: React.PropTypes.array,
  addComment: React.PropTypes.func.isRequired,
  commentForm: React.PropTypes.object,
  resetForm: React.PropTypes.func,
};

const mapStateToProps = state => ({
  details: state.details,
  events: state.events.event,
  comments: state.comments,
  commentForm: state.form.comment,
});

const mapDispatchToProps = {
  loadEvents,
  loadEventDetails,
  addComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
