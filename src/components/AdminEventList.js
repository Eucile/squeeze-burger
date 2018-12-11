import React from 'react';
import PropTypes from 'prop-types';
import AdminEvent from './AdminEvent';

function AdminEventList(props) {
  return(
    <div>
      <AdminEvent
        streetAddress={props.streetAddress}
        city={props.city}
        state={props.state}
        zipcode={props.zipcode}
        date={props.date}
        timeOpen={props.timeOpen}
        timeClose={props.timeClose}
      />
    </div>
  );
}

AdminEventList.propTypes = {
  addresses: PropTypes.object
}

export default AdminEventList;
