import React from 'react';

function CommentsList({comments}) {
  const commentsList = comments.map((comment, index) => {
    if (comment) {
      return (
      <div key={index} style={{marginBottom: '20px', borderBottom: '1px solid #dddddd', width: '200px'}}>
        <div style={{margin: '0 10px 10px 0', color: '#9E9E9E', fontWeight: '4'}}>{comment.userName} - {comment.date}</div>
        <div style={{color: '#757575', marginBottom: '10px'}}>{comment.commentTextarea}</div>
      </div>
      );
    }
    return null;
  });

  const reviewBlock = (commentsList.length > 0 ? commentsList : 'No reviews yet. Be the first one to review!');

  return (
    <div style={{margin: '30px 0'}}>
      {reviewBlock}
    </div>
  );
}

CommentsList.propTypes = {
  comments: React.PropTypes.array,
};

export default CommentsList;
