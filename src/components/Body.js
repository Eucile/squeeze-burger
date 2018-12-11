import React from 'react';
import Carousel from './Carousel';
import EventList from './EventList';
import MenuList from './MenuList';
import Social from './Social';
import Story from './Story';
import PropTypes from 'prop-types';

function Body(props) {
  return(
    <div>
      <EventList
        addresses={props.addresses}
      />
    </div>
  );
}

Body.propTypes = {
  addresses: PropTypes.object
}

export default Body;
