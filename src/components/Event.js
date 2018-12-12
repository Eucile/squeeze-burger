import React from 'react';
import GoogleMap from './GoogleMap';
import PropTypes from 'prop-types';

function Event({ streetAddress, state, city, zipcode, date, timeOpen, timeClosed, lat, lng }) {
  return(
    <div>
      <p>{streetAddress}</p>
      <p>{city}, {state} {zipcode}</p>
      <p>DATE GOES HERE</p>
      <p>TIMEOPEN GOES HERE</p>
      <p>TIMECLOSE GOES HERE</p>
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
  timeClosed: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number
}

export default Event;
