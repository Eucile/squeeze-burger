import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function AdminEvent({ onChangingSelectedEditEvent, streetAddress, state, city, zipcode, date, timeOpen, timeClosed, eventId }) {

  return(
    <div>
      <p>{streetAddress}</p>
      <p>{city}, {state} {zipcode}</p>
      <p>DATE GOES HERE</p>
      <p>TIMEOPEN GOES HERE</p>
      <p>TIMECLOSE GOES HERE</p>
      <button
        onClick={() => {
          onChangingSelectedEditEvent(eventId);
        }}
      >Edit Button</button>
    </div>
  );
}

AdminEvent.propTypes = {
  onChangingSelectedEditEvent: PropTypes.func,
  streetAddress: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zipcode: PropTypes.string,
  date: PropTypes.string,
  timeOpen: PropTypes.string,
  timeClose: PropTypes.string,
  eventId: PropTypes.string
}

export default connect()(AdminEvent);
