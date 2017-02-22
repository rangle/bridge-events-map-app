import React from 'react';

export default function EventDetailsComponent({ title, city }) {
  return (
    <div>
     <h1> Title: {title} </h1>
     <p> City: {city} </p>
    </div>
  );
}

EventDetailsComponent.propTypes = {
  title: React.PropTypes.string,
  city: React.PropTypes.string,
};
