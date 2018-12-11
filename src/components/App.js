import React, { Component } from 'react';
import Header from './Header';
import Admin from './Admin';
import Body from './Body';
import Booking from './Booking';
import Footer from './Footer';
import AddForm from './AddForm';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Admin/>
        <Body/>
        <Booking/>
        <Footer/>
        <AddForm/>
      </div>
    );
  }
}

export default App;
