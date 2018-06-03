import React, { Component }  from 'react';

class SearchBar extends Component {

	constructor(properties){
		super(properties);
		this.state = { term: '' };
	}

	render() {
	  return (
  		<div className="search-bar">
  		<div>
	      <input 
	        value = {this.state.term}
		    onChange={event => this.onInputChange(event.target.value)} />; 
	    </div>
	    </div>
	  );  
	}

	onInputChange(term){
	  this.setState({term});
	  this.props.onSearchTermChange(term);
	}


}

export default SearchBar;