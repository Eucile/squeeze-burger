import constants from './../constants';
import Firebase from 'firebase';
const { firebaseConfig } = constants;

/*eslint-disable */
firebase.initializeApp(firebaseConfig);
const addresses = firebase.database().ref('addresses');
/*eslint-enable */

export function fetchAdminInput(streetAddress, city, state, zipcode) {
  const addressConcat = streetAddress + city + state + zipcode;
  return function (dispatch) {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressConcat}&key=AIzaSyAhVPlN956j50euktiP88TXPgv7u2-_ljA`).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      addresses.push({
        streetAddress: streetAddress,
        city: city,
        state: state,
        zipcode: zipcode,
        lat: json.results[0].geometry.location.lat,
        lng: json.results[0].geometry.location.lng
      });
      console.log('CHECK OUT THIS SWEET API RESPONSE:', json)
    });
  };
}
