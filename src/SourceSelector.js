import React, { Component } from 'react';
import './App.css';

class SourceSelector extends Component {

  constructor(props) {
    super(props);
    this.state = { selectedMode: this.props.options[0] }
  }

  render() {
    return (
      <div className="source-selector">
        <h5>
          Currently viewing: 
          <span>{ this.state.selectedMode }</span>
        </h5>
      </div>
    );
  }
}

export default SourceSelector;
