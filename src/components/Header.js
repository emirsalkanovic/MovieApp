import React, { Component } from 'react';

class Header extends Component{
	render(){
		return(
			<nav className="navbar navbar-light bg-light">
  				<form className="form-inline">
    				<button className="btn btn-outline-secondary btn-lg" type="button"><a href="/movies">Movies</a></button>
    				<button className="btn btn-outline-secondary btn-lg" type="button"><a href="/">Tv Shows</a></button>
 			 	</form>
			</nav>
			);
	}
}

export default Header;