export default (state = {}, action) => {
  let newState;
  let newAddress;
  const { streetAddress, city, addressState, zipcode, lat, lng, deleteAddressId } = action;
  switch(action.type) {
    case 'RECEIVE_ADDRESS':
      newState = Object.assign({}, state);
      newState[action.address.id] = action.address;
      return newState;
    case 'DELETE_ADDRESS':
      const updatedState = [];
      newState = Object.assign({}, state);
      Object.keys(newState).map(function(eventId) {
        if(eventId !== deleteAddressId) {
          updatedState.push(newState[eventId])
        }
      })
      newState = Object.assign({}, updatedState)
      return newState;
    default:
      return state;
  }
}
