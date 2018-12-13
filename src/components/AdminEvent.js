import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function AdminEvent({onChangingSelectedEditEvent, streetAddress, addressState, city, zipcode, date, timeOpen, timeClose, eventId}) {
  return(
    <div className="box">
      <style>{`
        p {
          margin-block-start: 0px;
          margin-block-end: 0px;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
        }
        .box {
          display: flex;
          justify-content: center;
          border: 2px solid #E9ECF2;
          border-left: 5px solid #E9ECF2;
          width: 80%;
        }
        .dateAndTime {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
          margin-left: 20px;
          margin-right: 20px;
          font-size: 1rem;
          color: #868e9e;
        }
        .address {
          margin-left: 20px;
          margin-bottom: 20px;
          font-size: 1.25rem;
          color: #49505e;
        }
        .button {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }
      `}</style>
      <div className="dateAndTime">
        <p>{date}</p>
        <p>{timeOpen} to {timeClose}</p>
      </div>
      <div className="address">
        <p>{streetAddress}, {city}, {addressState} {zipcode}</p>
      </div>
      <div className="button">
        <button onClick={() => {onChangingSelectedEditEvent(eventId);}}>Edit Button</button>
      </div>
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
