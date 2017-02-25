// NYT Search - App.js
import React { PropTypes, Component } from "react";
import "./App.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

function routeHelper (routes){
	let path = (routes[routes.length - 1] || {}).path || "Home";
	return path.replace("/", "").toUpperCase() || "Unknown Page";
}

class App extends Component{
	render(){
		return(
		<div className="App">
		<Header />
				<h1>{routeHelper(this.props.routes)}{" "}</h1>
				<div className="container App-content">
				{this.props.children}
				</div>
		<Footer />
			
			</div>
		);
	}
}