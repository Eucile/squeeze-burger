import React from 'react';
import GoogleMap from './GoogleMap';
import PropTypes from 'prop-types';

function Event({ streetAddress, addressState, city, zipcode, date, timeOpen, timeClose, lat, lng}) {
  return(
    <div>
      <style>{``}</style>
      <p>{date}</p>
      <p>{streetAddress}, {city}, {addressState} {zipcode}</p>
      <p>{timeOpen} to {timeClose}</p>
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
  lat: PropTypes.number,
  lng: PropTypes.number
}

export default Event;
