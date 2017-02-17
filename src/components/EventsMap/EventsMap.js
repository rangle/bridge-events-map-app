import React from 'react';

const EventsMap = ({ events }) => (
    <div>
      Map Component will be inserted
    {events.map((event, index) => {
      return (
        <div key={index}>
            <p>{event.title}</p>
        </div>
      );
    })}
    </div>
);


EventsMap.propTypes = {
  events: React.PropTypes.array,
};

export default EventsMap;
