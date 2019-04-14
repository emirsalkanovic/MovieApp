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
			<nav className="navbar navbar-expand navbar-dark bg-primary">
				<a className="navbar-brand" href="/">Movie App</a>
  				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
  				  <span className="navbar-toggler-icon"></span>
  				</button>
  				<div className="collapse navbar-collapse" id="navbarsExample02">
  				  <ul className="navbar-nav mr-auto">
  				    <li className="nav-item">
  				      <Link to="/" onClick={this.actMovie}>
    				<button className="btn btn-outline-primary btn-lg bg-light" data-toggle="button" type="button" aria-pressed="true" autoComplete="off">Movies</button>
    				</Link>
  				    </li>
  				    <li className="nav-item">
  				      <Link to="/" onClick={this.actTv}>
    				<button className="btn btn-outline-primary btn-lg bg-light" data-toggle="button" type="button" aria-pressed="true" autoComplete="off">Tv Shows</button>
 					</Link>
  				    </li>
  				  </ul>
  				</div>
			</nav>
			);
	}
}

export default Header;

