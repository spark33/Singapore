import React, { Component } from 'react';
import './App.css';

import locations from './locations.json'

import Header from './Header.js';
import Map from './Map.js';
import LocationPins from './LocationPins.js';
import Sidebar from './Sidebar.js';
import SourceSelector from './SourceSelector.js';

class App extends Component {

  constructor(props) {
    super(props);
    let startingMode = "personal";
    this.state = { selectedMode: startingMode };
    this.handlePinClick = this.handlePinClick.bind(this);
  }

  handlePinClick(pinIndex) {
    if(pinIndex === this.state.selectedLocation) {
      this.setState({ selectedLocation: null })
    } else {
      this.setState({ selectedLocation: pinIndex });
    }
  }

  render() {
    return (
      <div className="App">
        <main className={ this.state.selectedLocation ? "sidebar-open" : ""}>
          <Header />
          <div className="map-container">
            <Map />
            <LocationPins 
              handlePinClick={ this.handlePinClick }
              locations = { locations[this.state.selectedMode] } />
          </div>
        </main>
        <Sidebar 
          index={ this.state.selectedLocation + 1 }
          location={ locations[this.state.selectedMode][this.state.selectedLocation] } />
        <SourceSelector 
          options={ Object.keys(locations) }
        />
      </div>
    );
  }
}

export default App;
