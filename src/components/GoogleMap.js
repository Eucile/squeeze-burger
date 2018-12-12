import React from "react";
import PropTypes from 'prop-types';
import '../assets/styles/Maps.scss';
import dummyMap from '../assets/img/dummymap.png';
import insta1 from '../assets/img/insta1.png';
import insta2 from '../assets/img/insta2.png';
import insta3 from '../assets/img/insta3.png';
import insta4 from '../assets/img/insta4.png';
import insta5 from '../assets/img/insta5.png';
import { googleMapAPIKey } from './../constants/googleMapAPIKey'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
const googleMapsStyles = {
  width: '100%',
  height: '200px'
};

class GoogleMap extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <Map
        google={this.props.google}
        style={googleMapsStyles}
        initialCenter={{
          lat: this.props.lat,
          lng: this.props.lng
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

GoogleMap.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number
}

export default GoogleApiWrapper({
  apiKey: (googleMapAPIKey)
})(GoogleMap)


// <div className="map-container">
//   <div className="google-map-list">
//     <div><img src={dummyMap}/></div>
//     <div><img src={dummyMap}/></div>
//     <div><img src={dummyMap}/></div>
//   </div>
//   <div className="social-sidebar">
//   <div>
//     <button className="map-catering-button">book catering</button>
//   </div>
//     <div className="social-flex">
//       <div>
//         <img src={insta2}/>
//         <img src={insta3}/>
//       </div>
//       <div>
//         <img src={insta4}/>
//         <img src={insta5}/>
//       </div>
//     </div>
//   </div>
// </div>
