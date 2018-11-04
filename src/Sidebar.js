import React, { Component } from 'react';
import './App.css';
import ReactHtmlParser from 'react-html-parser';

class Sidebar extends Component {

  render() {

  	if(this.props.location) { 
  		return (
	      <div className="sidebar open">
	      	<h3> 
	      		<span>{ this.props.index }</span>
	      		{ this.props.location.name } 
	      	</h3>
	      	<img src={ this.props.location.image } alt="location image"/>
	      	<div className="sidebar-content">
	      		<p> { ReactHtmlParser(this.props.location.blurb) } </p>
	      		<a className="sidebar-close-button" onClick={ this.props.closeSidebar }>×</a>
	      	</div>
	      </div>
    	);
  	} else {
  		return <div className="sidebar"></div>;
  	}
  }
}

export default Sidebar;
