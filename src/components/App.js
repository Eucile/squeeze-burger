import React, { Component } from 'react';
import Header from './Header';
import Admin from './Admin';
import Body from './Body';
import Booking from './Booking';
import Footer from './Footer';
import AddForm from './AddForm';
import TestGoogleAPI from './TestGoogleAPI';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './../actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    const { watchFirebaseAddressesRef } = actions;
    dispatch(watchFirebaseAddressesRef());
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Admin
          addresses={this.props.addresses}
        />
        <Body
          addresses={this.props.addresses}
        />
        <Booking/>
        <Footer/>
        <AddForm/>
        <TestGoogleAPI/>
      </div>
    );
  }
};

App.propTypes = {
  addresses: PropTypes.object
}

const mapStateToProps = state => {
  return {
    addresses: state.addresses
  };
};

export default connect(mapStateToProps)(App);
