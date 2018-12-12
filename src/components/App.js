import React, { Component } from 'react';
import Header from './Header';
import Admin from './Admin';
import Body from './Body';
import Booking from './Booking';
import Footer from './Footer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './../actions';
import { Switch, Route } from 'react-router-dom';
import AddForm from './AddForm';
import AdminLogIn from './AdminLogIn';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    const { watchFirebaseAddressesRef, watchFirebaseEditAddressesRef, watchFirebaseDeleteAddressesRef } = actions;
    dispatch(watchFirebaseAddressesRef());
    dispatch(watchFirebaseEditAddressesRef());
    dispatch(watchFirebaseDeleteAddressesRef());
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route
            exact path='/'
            render={ () =>
              <Body
                addresses={this.props.addresses}
              />
            }
          />
          <Route
          exact path='/login'
          render={ () =>
            <AdminLogIn
            />
          }
          />
          <Route
            exact path='/admin'
            render={ () =>
              <Admin
                addresses={this.props.addresses}
              />
            }
          />
          <Route
            exact path='/Booking'
            render={ () =>
              <Booking/>
            }
          />
        </Switch>
        <Footer/>
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
