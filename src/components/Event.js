import React from 'react';
import Map from './Map';
import PropTypes from 'prop-types';

function Event(props) {
  return(
    <div>
      // KRYSTAL!!!!!! Event info goes here
      <Map
        lat={props.lat}
        lng={props.lng}
      />
    </div>
  );
}

Event.propTypes = {
  streetAddress: PropTypes.string,
  city: PropTypes.string,
  zipCode: PropTypes.string,
  timeOpen: PropTypes.string,
  timeClosed: PropTypes.string,
  lat: PropTypes.string,
  lng: PropTypes.string
}

export default Event;
