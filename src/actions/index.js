import constants from './../constants';
import { googleMapAPIKey } from './../constants/googleMapAPIKey';
import Firebase from 'firebase';
const { firebaseConfig } = constants;

/*eslint-disable */
firebase.initializeApp(firebaseConfig);
const addresses = firebase.database().ref('addresses');
/*eslint-enable */

export function fetchAdminInput(streetAddress, city, addresState, zipcode, date, timeOpen, timeClose, dayOfWeek) {
  const addressConcat = streetAddress + city + addresState + zipcode;
  return function (dispatch) {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressConcat}&key=${googleMapAPIKey}`).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      addresses.push({
        streetAddress: streetAddress,
        city: city,
        addresState: addresState,
        zipcode: zipcode,
        date: date,
        timeOpen: timeOpen,
        timeClose: timeClose,
        dayOfWeek: dayOfWeek,
        lat: json.results[0].geometry.location.lat,
        lng: json.results[0].geometry.location.lng
      });
    });
  };
}

export function watchFirebaseAddressesRef() {
  return function(dispatch) {
    console.log(addresses);
    addresses.on('child_added', data => {
      const newAddress = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveAddress(newAddress));
    });
  }
}

function receiveAddress(addressFromFirebase) {
  return {
    type: 'RECEIVE_ADDRESS',
    address: addressFromFirebase
  }
}
