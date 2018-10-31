import React, { Component } from 'react';
import './App.css';

class Map extends Component {
  render() {
    return (
      <div className="Map">
        <img src={ require("./map.svg") } alt="Map of Singapore" />
      </div>
    );
  }
}

export default Map;