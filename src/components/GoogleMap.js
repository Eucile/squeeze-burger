import React from "react";
import PropTypes from 'prop-types';
import mapMarker from '../assets/img/map_marker.png';
import '../assets/styles/Maps.scss';
import '../assets/styles/GoogleMap.scss';
import schedule from '../assets/logos/SCHEDULE_orange.png';
import { googleMapAPIKey } from './../constants/googleMapAPIKey'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
const googleMapsStyles = {
  width: '50vw',
  height: '100px',
};

class GoogleMap extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="map-styles">
        <style jsx>{`
          #map-styles div div div div div div div:nth-child(4) div:nth-child(2) {
            width: 32px!important;
            height: 43px!important;
            left: -16px!important;
            top: -43px!important;
          }
          #map-styles div div div div div div div:nth-child(4) div:nth-child(2) img {
            width: 29px!important;
            height: 34px!important;
            left: 0!important;
            top: 0!important;
          }
        `}</style>
        <Map
          google={this.props.google}
          style={googleMapsStyles}
          initialCenter={{
            lat: this.props.lat,
            lng: this.props.lng
          }}
          zoom={14}>

          <Marker
            onClick={this.onMarkerClick}
            name={'Current location'}
            icon={{
              url: mapMarker
            }}
          />



        </Map>
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
