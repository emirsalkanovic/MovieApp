import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMovie, topMovies } from '../actions/index';

import { Link } from 'react-router-dom';



class Movies extends Component {
	render(){
		const movies = this.props.movies.moviesData;
				return (
					
					<div className="container">
					<Link to="/movies/search">
						<button type="button" className="btn btn-primary">Search Movies</button>
					</Link>
						<h1><i class="fa fa-film" aria-hidden="true"></i> 10 TOP RATED MOVIES</h1>
						<ul className="row">
							{ movies.slice(0, 10).map(
								movie => <MovieInfo movie={ movie } selectMovie={(movie) => this.props.selectMovie(movie)}/>
							)}
						</ul>
					</div>
        );
    }
  }



class MovieInfo extends Component {
	render() {
		const { movie } = this.props;
		return (

			<li
				key={movie.id}
				onClick={() => this.props.selectMovie(movie)}
				className="col-md-6 form-group">
				<Link to={`/movies/${movie.id}/details`}>
					<img src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} key={movie.id}/>
					<h3>{movie.title}</h3>
					<p>Rating: {movie.vote_average}</p>
				</Link>
			</li>
		)
	}
}


const mapDispatchToProps = dispatch => {
  return {
    selectMovie: (movie) => {
    	dispatch(selectMovie(movie))
    },
    getMovies: dispatch(topMovies())
  };
};

function mapStateToProps(state){
  return{
    movies: state.movies
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (Movies);