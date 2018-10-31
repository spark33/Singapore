import React, { Component } from 'react';
import './App.css';

class Pin extends Component {

  constructor(props) {
    super(props);
    this.styles = {
      top: props.y + '%',
      left: props.x + '%',
    };
  }

  render() {
    return (
      <div className="Pin" style={ this.styles }>
        <img src={ require("./map-pin.png") } />
        <h5>{ this.props.name }</h5>
      </div>
    );
  }
}

export default Pin;
