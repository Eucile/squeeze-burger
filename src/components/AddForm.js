import React from 'react';
import { fetchAdminInput } from './../actions';
import { connect } from 'react-redux';
import moment from 'moment';
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
    const formattedDate = moment(_date.value).format('dddd, MMMM D, YYYY');
    const formattedTimeOpen = moment(_timeOpen.value, 'HH:mm').format('h A');
    const formattedTimeClose = moment(_timeClose.value, 'HH:mm').format('h A');
    console.log(formattedDate)
    dispatch(fetchAdminInput(_streetAddress.value, _city.value, _addressState.value, _zipcode.value, formattedDate, formattedTimeOpen, formattedTimeClose));
  };

  return(
    <div>
      <form>
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
        <button onClick={handleAddressSubmission}>Submit</button>
      </form>
    </div>
  );
}

AddForm.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(AddForm);
