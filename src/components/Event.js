import React from 'react';
import GoogleMap from './GoogleMap';
import PropTypes from 'prop-types';

function Event({ streetAddress, state, city, zipcode, date, timeOpen, timeClose, dayOfWeek, lat, lng }) {
  if (dayOfWeek == 0) {
    dayOfWeek = 'Sunday'
  } else if (dayOfWeek == 1) {
    dayOfWeek = 'Monday'
  } else if (dayOfWeek == 2) {
    dayOfWeek = 'Tuesday'
  } else if (dayOfWeek == 3) {
    dayOfWeek = 'Wednesday'
  } else if (dayOfWeek == 4) {
    dayOfWeek = 'Thursday'
  } else if (dayOfWeek == 5) {
    dayOfWeek = 'Friday'
  } else {
    dayOfWeek = 'Saturday'
  }
  return(
    <div>
      <p>{streetAddress}</p>
      <p>{city}, {state} {zipcode}</p>
      <p>{date}</p>
      <p>{timeOpen}</p>
      <p>{timeClose}</p>
      <p>{dayOfWeek}</p>
      <GoogleMap
        lat={lat}
        lng={lng}
      />
    </div>
  );
}

Event.propTypes = {
  streetAddress: PropTypes.string,
  addressState: PropTypes.string,
  city: PropTypes.string,
  zipCode: PropTypes.string,
  date: PropTypes.string,
  timeOpen: PropTypes.string,
  timeClose: PropTypes.string,
  dayOfWeek: PropTypes.number,
  lat: PropTypes.number,
  lng: PropTypes.number
}

export default Event;
