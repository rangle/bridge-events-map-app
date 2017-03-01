import React from 'react';
import {Link} from 'react-router';

export default function EventsList({events}) {
  const titleList = events.map( (element) =>(
      <Link to={'/EventDetails/' + element.id}>
        <li>{element.title}</li>
      </Link>
  ) );
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
