import React from 'react';
import GoogleMap from './GoogleMap';
import PropTypes from 'prop-types';

function Event({ streetAddress, state, city, zipcode, date, timeOpen, timeClose, lat, lng }) {
  return(
    <div>
      <p>{streetAddress}</p>
      <p>{city}, {state} {zipcode}</p>
      <p>{date}</p>
      <p>{timeOpen}</p>
      <p>{timeClose}</p>
      <GoogleMap
        lat={lat}
        lng={lng}
      />
    </div>
  );
}
src/components/
Event.propTypes = {
  streetAddress: PropTypes.string,
  addressState: PropTypes.string,
  city: PropTypes.string,
  zipCode: PropTypes.string,
  date: PropTypes.string,
  timeOpen: PropTypes.string,
  timeClose: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number
}

export default Event;
