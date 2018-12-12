import React from 'react';
import PropTypes from 'prop-types';

function AdminEvent({ streetAddress, state, city, zipcode, date, timeOpen, timeClose, dayOfWeek }) {
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
  timeClose: PropTypes.string,
  dayOfWeek: PropTypes.number
}

export default AdminEvent;
