import React from 'react';
import { fetchAdminInput } from './../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../assets/styles/AddForm.scss';

function AddForm(props) {
  let _streetAddress = null;
  let _city = null;
  let _addressState = null;
  let _zipcode = null;

  function handleAddressSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    dispatch(fetchAdminInput(_streetAddress.value, _city.value, _addressState.value, _zipcode.value));
  };

  return(
    <div className="add-form">
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
          ref={(input) => {_addressState = input;}}
        />
        <input
          placeholder='Zipcode'
          type='text'
          ref={(input) => {_zipcode = input;}}
        />
        <button type='submit'>Submit</button>
      </form>
      </div>
    </div>
  );
}

AddForm.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(AddForm);
