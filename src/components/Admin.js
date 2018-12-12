import React from 'react';
import AddForm from './AddForm';
import EditForm from './EditForm';
import AdminEventList from './AdminEventList';
import PropTypes from 'prop-types';

class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedEditEvent: null,
      streetAddressInput: '',
      cityInput: '',
      addressStateInput: '',
      zipcodeInput: ''
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
      zipcodeInput: this.props.addresses[selectedEventId].zipcode
    });
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return(
      <div>
        <AddForm />
        <EditForm
          onInputChange={this.handleInputChange}
          selectedEditEvent={this.state.selectedEditEvent}
          streetAddressInput={this.state.streetAddressInput}
          cityInput={this.state.cityInput}
          addressStateInput={this.state.addressStateInput}
          zipcodeInput={this.state.zipcodeInput}
        />
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
