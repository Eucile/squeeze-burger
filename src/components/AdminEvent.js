import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function AdminEvent({onChangingSelectedEditEvent, streetAddress, addressState, city, zipcode, date, timeOpen, timeClose, eventId}) {
  return(
    <div className="box">
      <style>{`
        .box {
          border: 1px solid #E9ECF2;
          width: 800px;
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
          margin-top: 5px;
          margin-left: 20px;
          font-size: 1.25rem;
          color: #49505e;
        }
        .button {
          display: flex;
          justify-content: center;
          margin-top: 20px;
          margin-bottom: 20px;
        }
      `}</style>
      <div className="dateAndTime">
        <h6>{date}</h6>
        <h6>{timeOpen} to {timeClose}</h6>
      </div>
      <div className="address">
        <h5>{streetAddress}, {city}, {addressState} {zipcode}</h5>
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
