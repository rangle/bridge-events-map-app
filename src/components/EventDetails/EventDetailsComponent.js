import React from 'react';
import EventImage from '../EventImage/EventImage';

export default function EventDetailsComponent({ title, city, imageUrl, description }) {
  return (
    <div>
     <h1 style={{margin: '0 auto', color: '#424242', textAlign: 'center', padding: '30px'}}>{title} {imageUrl ? <EventImage src={imageUrl} height={'60px'} /> : ''} </h1>
     <p>City: {city}</p>
     <div dangerouslySetInnerHTML={createMarkup(description)} />
    </div>
  );
}

export function createMarkup(string) {
  return {__html: string};
}

EventDetailsComponent.propTypes = {
  title: React.PropTypes.string,
  city: React.PropTypes.string,
  imageUrl: React.PropTypes.string,
  description: React.PropTypes.string,
};
