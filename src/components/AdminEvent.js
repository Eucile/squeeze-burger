import React from 'react';
import PropTypes from 'prop-types';

function AdminEvent({ streetAddress, state, city, zipcode, date, timeOpen, timeClose}) {
  return(
    <div>
      <style>{`
        .flexBox {
          display: flex;
        }
      `}</style>
      <div className="flexBox">
        <p>{date}</p>
      </div>
      <p>{streetAddress}, {city}, {state} {zipcode}</p>
      <p>{timeOpen}</p>
      <p>{timeClose}</p>
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
