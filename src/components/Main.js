import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTv, topTv,searchShows, searchMovies } from '../actions/index';

import Header from './Header';
import Search from './Search';
import TopMovies from './TopMovies';
import TopTv from './TopTv';
import ShowsResult from './ShowsResult';
import MoviesResult from './MoviesResult';

class Main extends Component{
	constructor(props){
		super(props);

		this.state = {
			tv: true, 
			movie: false 
			}

		this.actTv = this.actTv.bind(this);
		this.actMovie= this.actMovie.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
	}
	
	actMovie(state){
		this.setState({
			movie: true,
			tv: false });

	}

	actTv(state){
		this.setState({
			movie: false,
			tv: true
		})
		
	}

	onInputChange(event){
		this.setState({ term: this.props.moviesSearch.value})

	}

	renderContent(){
		if(this.state.movie === true){
			if(this.props.moviesSearch.searchMovies.results !== undefined ){
				return(
					<MoviesResult />
					);
			}

			return ( 
				<TopMovies />
				);
		} else if (this.state.tv === true){
			if(this.props.showsSearch.searchShows.length > 0){
				return(
					<ShowsResult />
					);
			}

			return ( 
				<TopTv />
				);
		}
	}

	render(){
				return(
					<div>
						<Header onClickMovie={this.actMovie} onClickTv={this.actTv} />
						<Search searchMovies={ (e) => this.onInputChange} />
						{this.renderContent()}
					</div>
					);
			}
	}


function mapStateToProps(state){
	return{
		moviesSearch: state.searchMovies,
		showsSearch: state.searchShows
	}
}

export default connect(mapStateToProps, null) (Main);