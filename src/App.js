import React, { Component } from 'react';
import './App.css';

import locations from './locations.json'

import Header from './Header.js';
import Map from './Map.js';
import LocationPins from './LocationPins.js';
import Sidebar from './Sidebar.js';
import ModeSelector from './ModeSelector.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { selectedMode: "personal", selectedLocation: null };
    this.handlePinClick = this.handlePinClick.bind(this);
    this.switchMode = this.switchMode.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
  }

  handlePinClick(pinIndex) {
    if(pinIndex === this.state.selectedLocation) {
      this.setState({ selectedLocation: null })
    } else {
      this.setState({ selectedLocation: pinIndex });
    }
  }

  switchMode(newMode) {
    this.setState({ selectedMode: newMode });
  }

  closeSidebar() {
    this.setState({ selectedLocation: null });
  }

  render() {
    return (
      <div className="App">
        <main className={ this.state.selectedLocation !== null ? "sidebar-open" : "sidebar-closed" }>
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
          closeSidebar={ this.closeSidebar }
          location={ locations[this.state.selectedMode][this.state.selectedLocation] } />
        <div className="current-mode">
          <h5>
            Currently viewing: Favorite
            <ModeSelector 
              options={ Object.keys(locations) }
              selectedMode={ this.state.selectedMode }
              switchMode={ this.switchMode }
            />
            locations.
          </h5>
        </div>
      </div>
    );
  }
}

export default App;
