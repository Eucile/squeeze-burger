import React from 'react';
import { editSelectedAddress, deleteSelectedAddress } from './../actions';
import moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../assets/styles/EditForm.scss';

function EditForm(props) {

  console.log(props)

  let _streetAddress = null;
  let _city = null;
  let _addressState = null;
  let _zipcode = null;
  let _date = null;
  let _timeOpen = null;
  let _timeClose = null;

  if(props.selectedEditEvent != null) {
    let _streetAddress = props.streetAddressInput;
    let _city = props.cityInput;
    let _addressState = props.addressStateInput;
    let _zipcode = props.zipcodeInput;
    let _date = props.dateInput;
    let _timeOpen = props.timeOpenInput;
    let _timeClose = props.timeCloseInput;
  }

  function handleEditAddressSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const momentDate = moment(_date.value).format('dddd, MMMM D, YYYY');
    const formattedDate = momentDate.toUpperCase();
    const formattedTimeOpen = moment(_timeOpen.value, 'HH:mm').format('h A');
    const formattedTimeClose = moment(_timeClose.value, 'HH:mm').format('h A');
    dispatch(editSelectedAddress(props.selectedEditEvent, _streetAddress.value, _city.value, _addressState.value, _zipcode.value, formattedDate, formattedTimeOpen, formattedTimeClose));
  };

  function handleDeleteAddressSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    dispatch(deleteSelectedAddress(props.selectedEditEvent));
  };

  return(
    <div className="edit-form">
      <style>{`
        .form {
          margin-top: 125px;
          width: 350px;
          padding: 1em;
          border: 1px solid #CCC;
          border-radius: 1em;
        }
      `}</style>
      <form className="form">
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
        <input
          placeholder='Date'
          type='date'
          name='dateInput'
          onChange={(event) => {props.onInputChange(event)}}
          value={props.dateInput}
          ref={(input) => {_date = input;}}
        />
        <input
          placeholder='Time Open'
          type='time'
          name='timeOpenInput'
          onChange={(event) => {props.onInputChange(event)}}
          value={props.timeOpenInput}
          ref={(input) => {_timeOpen = input;}}
        />
        <input
          placeholder='Time Close'
          type='time'
          name='timeCloseInput'
          onChange={(event) => {props.onInputChange(event)}}
          value={props.timeCloseInput}
          ref={(input) => {_timeClose = input;}}
        />
        <button onClick={handleEditAddressSubmission}>Submit</button>
        <button onClick={handleDeleteAddressSubmission}>Delete</button>
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
  zipcodeInput: PropTypes.string,
  dateInput: PropTypes.string,
  timeOpenInput: PropTypes.number,
  timeCloseInput: PropTypes.number
};

export default connect()(EditForm);
