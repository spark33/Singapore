import React, { Component } from 'react';
import './App.css';

class Pin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      styles: {
        top: this.props.y + '%',
        left: this.props.x + '%',
      }
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      styles: {
        top: nextProps.y + '%',
        left: nextProps.x + '%',
      }
    });
  }

  setStyles() {
    this.setState({
      styles: {
        top: this.props.y + '%',
        left: this.props.x + '%',
      }
    });
  }

  handleClick() {
    this.props.handlePinClick(this.props.index);
  }

  render() {
    return (
      <div className="Pin" 
           style={ this.state.styles }
           onClick={ this.handleClick } >
        <img src={ require("./map-pin.png") } alt="Map Pin" />
        <h4>{ this.props.name }</h4>
      </div>
    );
  }
}

export default Pin;
