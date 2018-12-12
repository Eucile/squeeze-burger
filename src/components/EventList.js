import React from 'react';
import Event from './Event';
import PropTypes from 'prop-types';

function EventList({ addresses }) {
  return(
    <div>
      {Object.keys(addresses).map(function(eventId) {
        var event = addresses[eventId];
        return <Event key={eventId}
          test={event}
          streetAddress={event.streetAddress}
          state={event.state}
          city={event.city}
          zipcode={event.zipcode}
          date={event.date}
          timeOpen={event.timeOpen}
          timeClosed={event.timeClosed}
          lat={event.lat}
          lng={event.lng}/>
      })}
    </div>
  );
}

EventList.propTypes = {
  addresses: PropTypes.object
}


export default EventList;
