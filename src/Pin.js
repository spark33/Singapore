import React, { Component } from 'react';
import './App.css';

class Pin extends Component {

  constructor(props) {
    super(props);
    this.styles = {
      top: props.y + '%',
      left: props.x + '%',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handlePinClick(this.props.index);
  }

  render() {
    return (
      <div className="Pin" 
           style={ this.styles }
           onClick={ this.handleClick } >
        <img src={ require("./map-pin.png") } alt="Map Pin" />
        <h4>{ this.props.name }</h4>
      </div>
    );
  }
}

export default Pin;
