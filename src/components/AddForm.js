import React from 'react';
import PropTypes from 'prop-types';

function AddForm(props) {
  let _streetAddress = null;
  let _city = null;
  let _state = null;
  let _zipcode = null;

  function handleAddressSubmission(event) {
    event.preventDefault();
    props.onNewAddress(_streetAddress.value, _city.value, _state.value, _zipcode.value);
  };

  return(
    <div>
      <form onSubmit={handleAddressSubmission}>
        <input
          placeholder='Street Address'
          type='text'
          ref={(input) => {_streetAddress = input;}}
        />
        <input
          placeholder='City'
          type='text'
          ref={(input) => {_city = input;}}
        />
        <input
          placeholder='State'
          type='text'
          ref={(input) => {_state = input;}}
        />
        <input
          placeholder='Zipcode'
          type='text'
          ref={(input) => {_zipcode = input;}}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

AddForm.propTypes = {
  onNewAddress: PropTypes.func
}

export default AddForm;
