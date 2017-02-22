import React from 'react';

export default function EventsList({events}) {
  const titleList = events.map( (element) => (<li>{element.title}</li>) );
  return (
    <div>
      <h1>Event List</h1>
      <ul>{titleList}</ul>
    </div>
  );
}

EventsList.propTypes = {
  events: React.PropTypes.array,
};
