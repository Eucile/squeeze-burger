import React from 'react';
import { editSelectedAddress, deleteSelectedAddress } from './../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../assets/styles/EditForm.scss';

function EditForm(props) {

  let _streetAddress = null;
  let _city = null;
  let _addressState = null;
  let _zipcode = null;

  if(props.selectedEditEvent != null) {
    let _streetAddress = props.streetAddressInput;
    let _city = props.cityInput;
    let _addressState = props.addressStateInput;
    let _zipcode = props.zipcodeInput;
  }

  function handleEditAddressSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    dispatch(editSelectedAddress(props.selectedEditEvent, _streetAddress.value, _city.value, _addressState.value, _zipcode.value));
  };

  function handleDeleteAddressSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    dispatch(deleteSelectedAddress(props.selectedEditEvent));
  };

  return(
    <div className="edit-form">
      <form>
        <input
          placeholder='Street Address'
          type='text'
          name='streetAddressInput'
          onChange={(event) => {props.onInputChange(event)}}
          value={props.streetAddressInput}
          ref={(input) => {_streetAddress = input;}}
        />
        <input
          placeholder='City'
          type='text'
          name='cityInput'
          onChange={(event) => {props.onInputChange(event)}}
          value={props.cityInput}
          ref={(input) => {_city = input;}}
        />
        <input
          placeholder='State'
          type='text'
          name='addressStateInput'
          onChange={(event) => {props.onInputChange(event)}}
          value={props.addressStateInput}
          ref={(input) => {_addressState = input;}}
        />
        <input
          placeholder='Zipcode'
          type='text'
          name='zipcodeInput'
          onChange={(event) => {props.onInputChange(event)}}
          value={props.zipcodeInput}
          ref={(input) => {_zipcode = input;}}
        />
        <button className="edit-button" onClick={handleEditAddressSubmission}>Submit</button>
        <button className="edit-button" onClick={handleDeleteAddressSubmission}>Delete</button>
      </form>
    </div>
  );
}

EditForm.propTypes = {
  dispatch: PropTypes.func,
  onInputChange: PropTypes.func,
  selectedEditEvent: PropTypes.string,
  streetAddressInput: PropTypes.string,
  cityInput: PropTypes.string,
  addressStateInput: PropTypes.string,
  zipcodeInput: PropTypes.string
};

export default connect()(EditForm);
