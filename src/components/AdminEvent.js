import React from 'react';
import PropTypes from 'prop-types';

function AdminEvent(props) {
  return(
    <div>
      
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
