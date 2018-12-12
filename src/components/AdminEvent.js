import React from 'react';
import PropTypes from 'prop-types';

function AdminEvent({ streetAddress, state, city, zipcode, date, timeOpen, timeClosed }) {
  return(
    <div>
      <p>{streetAddress}</p>
      <p>{city}, {state} {zipcode}</p>
      <p>DATE GOES HERE</p>
      <p>TIMEOPEN GOES HERE</p>
      <p>TIMECLOSE GOES HERE</p>
    </div>
  );
}

AdminEvent.propTypes = {
  streetAddress: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zipcode: PropTypes.string,
  date: PropTypes.string,
  timeOpen: PropTypes.string,
  timeClose: PropTypes.string
}

export default AdminEvent;
