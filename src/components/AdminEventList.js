import React from 'react';
import PropTypes from 'prop-types';
import AdminEvent from './AdminEvent';

function AdminEventList({ addresses, onChangingSelectedEditEvent }) {
  return(
    <div>
      {Object.keys(addresses).map(function(addressEventId) {
        var addressEvent = addresses[addressEventId];
        return <AdminEvent key={addressEventId}
          onChangingSelectedEditEvent={onChangingSelectedEditEvent}
          streetAddress={addressEvent.streetAddress}
          state={addressEvent.state}
          city={addressEvent.city}
          zipcode={addressEvent.zipcode}
          date={addressEvent.date}
          timeOpen={addressEvent.timeOpen}
          timeClosed={addressEvent.timeClosed}
          eventId={addressEventId}/>
      })}
    </div>
  );
}

AdminEventList.propTypes = {
  onChangingSelectedEditEvent: PropTypes.func,
  addresses: PropTypes.object
}

export default AdminEventList;