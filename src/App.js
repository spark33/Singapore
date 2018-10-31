import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Map from './Map.js';
import LocationPins from './LocationPins.js';
import Sidebar from './Sidebar.js';
import locations from './locations.json'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handlePinClick = this.handlePinClick.bind(this);
  }

  handlePinClick(pinIndex) {
    if(locations[pinIndex] == this.state.selectedLocation) {
      this.setState({ selectedLocation: null })
    } else {
      this.setState({ selectedLocation: locations[pinIndex] });
    }
  }

  render() {

    return (
      <div className="App">
        <main>
          <Header />
          <div className="map-container">
            <Map />
            <LocationPins 
              handlePinClick={ this.handlePinClick }
              locations = { locations } />
          </div>
        </main>
        <Sidebar 
          location={ this.state.selectedLocation } />
      </div>
    );
  }
}

export default App;
