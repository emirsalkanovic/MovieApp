import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
		constructor(props){
		super(props);

		this.state = { tv: true,
					   movies: false
					};
		this.actTv = this.actTv.bind(this);
		this.actMovie = this.actMovie.bind(this);

	}

	actMovie(){
		this.setState({
			tv: false,
			movies: true 
		});

		this.props.onClickMovie(this.state);
	}

	actTv(){

		this.setState({
			tv: true,
			movies: false
		});

		this.props.onClickTv(this.state);
	}
	render(){
		return(
			<nav className="navbar navbar-light bg-light">
  				<form className="form-inline">
  					<Link to="/" onClick={this.actMovie}>
    				<button className="btn btn-outline-primary btn-lg" data-toggle="button" type="button" aria-pressed="true" autoComplete="off">Movies</button>
    				</Link>
    				<Link to="/" onClick={this.actTv}>
    				<button className="btn btn-outline-primary btn-lg" data-toggle="button" type="button" aria-pressed="true" autoComplete="off">Tv Shows</button>
 			 		</Link>
 			 	</form>
			</nav>
			);
	}
}

export default Header;

