import * as types from './actionTypes';

export function addComment(comment) {
  return {
    type: types.ACTION_TYPES.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}
