import React from "react";
import PropTypes from 'prop-types';
import '../assets/styles/Maps.scss';
import '../assets/styles/GoogleMap.scss';
import schedule from '../assets/logos/SCHEDULE_orange.png';
import { googleMapAPIKey } from './../constants/googleMapAPIKey'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
const googleMapsStyles = {
  width: '80vw',
  height: '100px',
};

class GoogleMap extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.lat);
    return (
      <div id="map-styles">
        <Marker onClick={this.onMarkerClick}
        name={'Current location'} />
        <InfoWindow onClose={this.onInfoWindowClose}/>
        <Map
          google={this.props.google}
          style={googleMapsStyles}
          initialCenter={{
            lat: this.props.lat,
            lng: this.props.lng
          }}
          zoom={14}
          />
      </div>
    );
  };
}

GoogleMap.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number
}

export default GoogleApiWrapper({
  apiKey: (googleMapAPIKey)
})(GoogleMap)
