import React from 'react';
import { Field, reduxForm } from 'redux-form';

function CommentForm({handleAddComment}) {
  return (
    <form onSubmit={ handleAddComment }>
      <Field name="commentTextarea" component="input" type="text" placeholder="Leave a comment" />
      <button type="submit">Submit</button>
    </form>
  );
}

CommentForm.propTypes = {
  handleAddComment: React.PropTypes.func,
};

export default reduxForm({ form: 'comment' })(CommentForm);
