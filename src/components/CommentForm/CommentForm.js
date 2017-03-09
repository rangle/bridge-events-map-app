import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';

const CommentForm = ({handleAddComment}) => {
  return (
  	<div>
      <h3 style={{color: '#424242', textAlign: 'center'}}>REVIEWS</h3>
	    <form onSubmit={handleAddComment}>
	      <Field name="userName" component={TextField} type="text" placeholder="Your name" floatingLabelText="Your name"/><br/>
	      <Field name="commentTextarea" component={TextField} type="text" placeholder="Leave a comment" multiLine rows={2} floatingLabelText="Leave a comment"/>
        <br/>
        <RaisedButton label="Submit" type="submit" primary/>
	    </form>
    </div>
  );
};

CommentForm.propTypes = {
  handleAddComment: React.PropTypes.func,
};

export default reduxForm({ form: 'comment' })(CommentForm);
