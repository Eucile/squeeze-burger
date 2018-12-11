import React from 'react';
import { googleAPIKey } from './../constants/googleAPIKey'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
const googleMapsStyles = {
  width: '100%',
  height: '200px'
}

class TestGoogleAPI extends React.Component {
  render() {
    return(
      <div>
        <Map
          google={this.props.google}
          style={googleMapsStyles}
          initialCenter={{
            lat: 40.854885,
            lng: -88.081807
          }}
          zoom={14}
          >
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
          <InfoWindow onClose={this.onInfoWindowClose}>

          </InfoWindow>
        </Map>
      </div>
    );
  };
}

export default GoogleApiWrapper({
  apiKey: (googleAPIKey)
})(TestGoogleAPI)
