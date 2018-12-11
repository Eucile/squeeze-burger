import React, { Component } from 'react';
import Header from './Header';
import Admin from './Admin';
import Body from './Body';
import Booking from './Booking';
import Footer from './Footer';
import TestGoogleAPI from './TestGoogleAPI';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Admin
          addresses={this.props.mapStateToProps}
        />
        <Body
          addresses={this.props.mapStateToProps}
        />
        <Booking/>
        <Footer/>
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
