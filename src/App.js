import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map.js';
import LocationPins from './LocationPins.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h5>Explore:</h5>
          <h1>Singapore</h1>
          <p>
            Some description of Singapore and what it means to me
          </p>
        </header>
        <div className="map-container">
          <Map />
          <LocationPins />
        </div>
      </div>
    );
  }
}

export default App;
