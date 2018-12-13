import React from 'react';
import AddForm from './AddForm';
import EditForm from './EditForm';
import AdminEventList from './AdminEventList';
import PropTypes from 'prop-types';
import '../assets/styles/Admin.scss';

class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedEditEvent: null,
      streetAddressInput: '',
      cityInput: '',
      addressStateInput: '',
      zipcodeInput: '',
      dateInput: '',
      timeOpenInput: '',
      timeCloseInput: ''

    }
    this.handleChangingSelectedEditEvent = this.handleChangingSelectedEditEvent.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChangingSelectedEditEvent(selectedEventId) {
    this.setState({
      selectedEditEvent: selectedEventId,
      streetAddressInput: this.props.addresses[selectedEventId].streetAddress,
      cityInput: this.props.addresses[selectedEventId].city,
      addressStateInput: this.props.addresses[selectedEventId].addressState,
      zipcodeInput: this.props.addresses[selectedEventId].zipcode,
      dateInput: this.props.addresses[selectedEventId].date,
      timeOpenInput: this.props.addresses[selectedEventId].timeOpen,
      timeCloseInput: this.props.addresses[selectedEventId].timeClose
    });
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return(
      <div className="admin-container">
        <div className="add-and-edit">
          <AddForm />
          <EditForm
            onInputChange={this.handleInputChange}
            selectedEditEvent={this.state.selectedEditEvent}
            streetAddressInput={this.state.streetAddressInput}
            cityInput={this.state.cityInput}
            addressStateInput={this.state.addressStateInput}
            zipcodeInput={this.state.zipcodeInput}
            dateInput={this.state.dateInput}
            timeOpenInput={this.state.timeOpenInput}
            timeCloseInput={this.state.timeCloseInput}
          />
        </div>
        <AdminEventList
          onChangingSelectedEditEvent={this.handleChangingSelectedEditEvent}
          addresses={this.props.addresses}
        />
      </div>
    );
  };
}

Admin.propTypes = {
  addresses: PropTypes.object
}

export default Admin;
