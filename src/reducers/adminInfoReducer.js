export default (state = {}, action) => {
  let newState;
  let newAddress;
  const { streetAddress, city, addressState, zipcode, lat, lng } = action;

  switch(action.type) {
    case 'RECEIVE_ADDRESS':
      console.log(action.address);
      newState = Object.assign({}, state);
      newState[action.address.id] = action.address;
      console.log(newState);
      return newState;

    default:
      return state;
  }
}
