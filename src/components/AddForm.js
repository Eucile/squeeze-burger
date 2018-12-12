import React from 'react';
import { fetchAdminInput } from './../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function AddForm(props) {
  let _streetAddress = null;
  let _city = null;
  let _addressState = null;
  let _zipcode = null;
  let _date = null;
  let _timeOpen = null;
  let _timeClose = null;

  function handleAddressSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const day = new Date(_date.value);
    const dayOfWeek = day.getDay();
    dispatch(fetchAdminInput(_streetAddress.value, _city.value, _addressState.value, _zipcode.value, _date.value, _timeOpen.value, _timeClose.value, dayOfWeek));
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
          ref={(input) => {_addressState = input;}}
        />
        <input
          placeholder='Zipcode'
          type='text'
          ref={(input) => {_zipcode = input;}}
        />
        <input
          placeholder='Date'
          type='date'
          ref={(input) => {_date = input;}}
        />
        <input
          placeholder='Time Open'
          type='time'
          ref={(input) => {_timeOpen = input;}}
        />
        <input
          placeholder='Time Close'
          type='time'
          ref={(input) => {_timeClose = input;}}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

AddForm.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(AddForm);
