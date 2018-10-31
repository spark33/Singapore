import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <h5>Explore</h5>
        <h1>Singapore</h1>
        <p>
          <b>I lived in Singapore for 14 years.</b>
          I know many areas of this beautiful island fairly well-- whether because they're great tourist attractions, food places, or because they mean something to me personally. I created this project to reflect on these places and share them on an interactive medium! Hope you enjoy.
        </p>
      </header>
    );
  }
}

export default Header;
