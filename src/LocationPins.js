import React, { Component } from 'react';
import './App.css';
import locations from './locations.json'
import Pin from './Pin.js';

class LocationPins extends Component {
  render() {
    return (
      <div className="location-pins">
        {
          locations.map(function(location, index) {
            return <Pin 
                      x = { location.x }
                      y = { location.y }
                      name = { location.name } 
                   />;
          })
        }
      </div>
    );
  }
}

export default LocationPins;
