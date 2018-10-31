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
    this.state = { sidebarOpen: false };
    this.handlePinClick = this.handlePinClick.bind(this);
  }

  handlePinClick(pinIndex) {
    let location = locations[pinIndex];
    this.setState({
      sidebarOpen: !this.state.sidebarOpen,
      selectedLocation: location
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="map-container">
          <Map />
          <LocationPins 
            handlePinClick={ this.handlePinClick }
            locations = { locations } />
        </div>
        <Sidebar 
          open={ this.state.sidebarOpen }
          location={ this.state.selectedLocation } />
      </div>
    );
  }
}

export default App;
