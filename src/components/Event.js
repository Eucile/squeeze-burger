import React from 'react';
import GoogleMap from './GoogleMap';
import PropTypes from 'prop-types';

function Event({ streetAddress, addressState, city, zipcode, date, timeOpen, timeClose, lat, lng}) {
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
          margin-left: 25px;
          border: 2px solid #E9ECF2;
          border-left: 5px solid #E9ECF2;
          width: 80%;
          margin: 35px auto;
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
      `}</style>
      <div className="dateAndTime">
        <p>{date}</p>
        <p>{timeOpen} to {timeClose}</p>
      </div>
      <div className="address">
        <p>{streetAddress}, {city}, {addressState} {zipcode}</p>
      </div>
      <div className="googleMapBox">
        <div className="googleMap">
          <GoogleMap
            lat={lat}
            lng={lng}
          />
        </div>
      </div>
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
