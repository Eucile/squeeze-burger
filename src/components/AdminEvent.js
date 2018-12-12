import React from 'react';
import PropTypes from 'prop-types';

function AdminEvent({ streetAddress, state, city, zipcode, date, timeOpen, timeClose}) {
  return(
    <div className="box">
      <style>{`
        .box {

        }
      `}</style>
      <p>{date}</p>
      <p>{streetAddress}, {city}, {state} {zipcode}</p>
      <p>{timeOpen} to {timeClose}</p>
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
