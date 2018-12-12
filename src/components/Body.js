import React from 'react';
import Carousel from './Carousel';
import EventList from './EventList';
import MenuList from './MenuList';
import Hero from './Hero';
import Maps from './Maps';
import Story from './Story';
import Social from './Social';
import PropTypes from 'prop-types';
import AddForm from './AddForm';
import AdminLogIn from './AdminLogIn';

function Body({ addresses }) {
  return(
    <div>
    <Hero/>
    <Maps/>
    <EventList
      addresses={addresses}
    />
    <MenuList/>
    <Story />
    </div>
  );
}

Body.propTypes = {
  addresses: PropTypes.object
}

export default Body;
