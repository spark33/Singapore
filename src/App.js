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
    this.state = { dataset: "personal", locations: locations.personal };
    this.handlePinClick = this.handlePinClick.bind(this);
  }

  handlePinClick(pinIndex) {
    if(pinIndex == this.state.selectedLocation) {
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
              locations = { this.state.locations } />
          </div>
        </main>
        <Sidebar 
          index={ this.state.selectedLocation }
          location={ locations[this.state.selectedLocation] } />
      </div>
    );
  }
}

export default App;
