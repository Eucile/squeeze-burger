import React, { Component } from 'react';
import Header from './Header';
import Hero from './Hero';
import Maps from './Maps';
import MenuList from './MenuList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Header/>
        <Hero/>
        <Maps/>
        <MenuList/>
        </header>
      </div>
    );
  }
}

export default App;
