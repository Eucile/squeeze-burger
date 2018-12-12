import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function AdminEvent({onChangingSelectedEditEvent, streetAddress, addressState, city, zipcode, date, timeOpen, timeClose, eventId}) {
  return(
    <div className="box">
      <style>{`
        .box {
          border: 1px solid #E9ECF2;
          margin: 20px;
        }
      `}</style>
      <p>{date}</p>
      <p>{streetAddress}, {city}, {addressState} {zipcode}</p>
      <p>{timeOpen} to {timeClose}</p>

      <button
        onClick={() => {
          onChangingSelectedEditEvent(eventId);
        }}>Edit Button</button>
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
