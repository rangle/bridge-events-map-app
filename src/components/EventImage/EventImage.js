import React from 'react';

const EventImage = (props) => (
  <img src={props.src} />
);

EventImage.propTypes = {
  src: React.PropTypes.string,
};

export default EventImage;
