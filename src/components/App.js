import React, { Component } from 'react';
import Header from './Header';
import Admin from './Admin';
import Body from './Body';
import Booking from './Booking';
import Footer from './Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      latitude: null,
      longitude: null
    }
    this.handleNewAddress = this.handleNewAddress.bind(this);
  }

  handleNewAddress(streetAddress, city, state, zip) {
    const addressConcat = streetAddress + city + state + zip;
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressConcat}&key=AIzaSyC45taHipsUXKJ0Pi76aupQGoe8qGNeUmI`).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then((json) => {
      this.setState({
        latitude: json.results[0].geometry.lat,
        longitude: json.results[0].geometry.lng
      })
      console.log(this.state);
      console.log('CHECK OUT THIS SWEET API:', json)
    }, () => {
      console.log('hi')
    });
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Admin/>
        <Body/>
        <Booking/>
        <Footer/>
      </div>
    );
  }
}

export default App;
