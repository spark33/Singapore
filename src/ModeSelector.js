import React, { Component } from 'react';
import './App.css';

class ModeSelector extends Component {

  constructor(props) {
    super(props);
    this.state = { selectedMode: this.props.selectedMode }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ displayingOptions: !this.state.displayingOptions });
  }

  switchMode(mode) {
    this.setState({ displayingOptions: false, selectedMode: mode });
    this.props.switchMode(mode);
  }

  render() {
    return (
      <div className="mode-selector">
        <div className={ this.state.displayingOptions ? "mode-options showing" : "mode-options hidden" }>
          { this.props.options.map(function(option, index) {
            return(
              <a onClick={ () => this.switchMode(option) }>
                { option }
              </a>
            );
          }, this)}
        </div>
        <a onClick={ this.handleClick }> { this.state.selectedMode } </a>
      </div>
    );
  }
}

export default ModeSelector;
