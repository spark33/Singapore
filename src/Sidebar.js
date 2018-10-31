import React, { Component } from 'react';
import './App.css';

class Sidebar extends Component {

	constructor(props) {
		super(props);
	}

  render() {

  	let title;
  	let content;

  	if(this.props.location) { 
  		return (
	      <div className= { this.props.open ? "sidebar open" : "sidebar closed" }>
	      	<h3> { this.props.location.name } </h3>
	      	<p> { this.props.location.blurb } </p>
	      </div>
    	);
  	} else {
  		return null;
  	}
  }
}

export default Sidebar;
