import React, { Component } from 'react';
import AddForm from './AddForm';
import Header from './Header';
import Hero from './Hero';
import Maps from './Maps';
import MenuList from './MenuList';


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
        <header className="App-header">
        <Header/>
        <Hero/>
        <Maps/>
        <MenuList/>
        </header>
        <AddForm onNewAddress={this.handleNewAddress}/>
      </div>
    );
  }
}

export default App;