import constants from './../constants';
import { googleMapAPIKey } from './../constants/googleMapAPIKey';
import Firebase from 'firebase';
const { firebaseConfig } = constants;

/*eslint-disable */
firebase.initializeApp(firebaseConfig);
const addresses = firebase.database().ref('addresses');
/*eslint-enable */

export function fetchAdminInput(streetAddress, city, addressState, zipcode, date, timeOpen, timeClose) {
  const addressConcat = streetAddress + city + addressState + zipcode;
  return function (dispatch) {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressConcat}&key=${googleMapAPIKey}`).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      console.log(json);
      addresses.push({
        streetAddress: streetAddress,
        city: city,
        addressState: addressState,
        zipcode: zipcode,
        date: date,
        timeOpen: timeOpen,
        timeClose: timeClose,
        lat: json.results[0].geometry.location.lat,
        lng: json.results[0].geometry.location.lng
      });
    });
  };
};

export function editSelectedAddress(selectedEditEvent, streetAddress, city, addressState, zipcode) {
  return function (dispatch) {
    return addresses.child(selectedEditEvent).update({
      streetAddress: streetAddress,
      city: city,
      addressState: addressState,
      zipcode: zipcode
    });
  };
};

export function deleteSelectedAddress(selectedEditEvent) {
  return function (dispatch) {
    return addresses.child(selectedEditEvent).remove();
  };
};

export function watchFirebaseAddressesRef() {
  return function(dispatch) {
    addresses.on('child_added', data => {
      const newAddress = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveAddress(newAddress));
    });
  }
};

export function watchFirebaseEditAddressesRef() {
  return function(dispatch) {
    addresses.on('child_changed', data => {
      const newAddress = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveAddress(newAddress));
    });

  }
};

export function watchFirebaseDeleteAddressesRef() {
  return function(dispatch) {
    addresses.on('child_removed', data => {
      console.log("DELETE");
      dispatch(deleteAddress(data.getKey()));
    });
    console.log("DELETE");
  }
};

function receiveAddress(addressFromFirebase) {
  return {
    type: 'RECEIVE_ADDRESS',
    address: addressFromFirebase
  }
};

function deleteAddress(deleteAddressId) {
  console.log(deleteAddressId);
  return {
    type: 'DELETE_ADDRESS',
    deleteAddressId: deleteAddressId
  }
};
