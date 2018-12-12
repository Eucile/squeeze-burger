import React from 'react';
import Event from './Event';
import PropTypes from 'prop-types';

function EventList(props) {
  return(
    <div>
      {Object.keys(props.addresses).map(function(eventId) {
        var event = props.addresses[eventId];
        console.log(event);
        return <Event key={eventId}
          test={event}
          streetAddress={event.streetAddress}
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
