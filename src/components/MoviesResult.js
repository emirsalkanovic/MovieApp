import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMovie, searchMovies } from '../actions/index';
import { Link } from 'react-router-dom';

class MoviesResult extends Component{
	render(){
		const results = this.props.moviesResults.searchMovies.results;
		return(
			<div className="container">
                <ul className="row">
                    { results.map(
                        result => <MovieResultsInfo result={ result } selectMovie={(result) => this.props.selectMovie(result)}/>
                    )}
                </ul>
            </div>
			);
	}
}

class MovieResultsInfo extends Component {
    render() {
        const { result } = this.props;
        return (
            <li
                key={result.id}
                onClick={() => this.props.selectMovie(result)}
                className="col-md-6 form-group">
                <Link to={`/movies/${result.id}/details`}>
                    <img src={`http://image.tmdb.org/t/p/w185/${result.poster_path}`} key={result.id}/>
                    <h3>{result.title}</h3>
                    <p>Rating: {result.vote_average}</p>
                </Link>
            </li>
        );
    }
}

const mapDispatchToProps = dispatch => { 
  return {
   selectMovie: (movie) => dispatch(selectMovie(movie))
};
};

function mapStateToProps(state){
  return{
    moviesResults: state.searchMovies
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (MoviesResult);