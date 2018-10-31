import React, { Component } from 'react';
import './App.css';
import Pin from './Pin.js';

class LocationPins extends Component {

  render() {
    return (
      <div className="location-pins">
        {
          this.props.locations.map(function(location, index) {
            return <Pin 
                      key = { index }
                      index = { index }
                      x = { location.x }
                      y = { location.y }
                      name = { location.name } 
                      handlePinClick = { this.props.handlePinClick }
                   />;
          }, this)
        }
      </div>
    );
  }
}

export default LocationPins;
