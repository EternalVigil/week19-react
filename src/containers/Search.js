// NYT Search - Seach.js

import React { PropTypes, Component } from "react";
import "./Search.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

function routeHelper (routes){
	let path = (routes[routes.length -1] || {}).path || "Home";
	return path.replace("/", "").toUpperCase() || "Unknown Page";
	
}

class Search extends Component{
	render(){
		return(
		<div className="Search">
		<Header />
				<h1>{routeHelper(this.props.routes)}{" "}</h1>
		<Footer />
			</div>
		);
	}
}

Search.propTypes = {
	children: PropTypes.node,
	routes: PropTypes.array
}

export default Search;