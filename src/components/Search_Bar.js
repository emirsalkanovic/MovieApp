import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMovie, searchMovies } from '../actions/index';
import { Link } from 'react-router-dom';

class SearchBar extends Component{
	constructor(props){
		super(props);

		this.state = { term : ''};

        this.onInputChange = this.onInputChange.bind(this);
	}

    onInputChange(event) {
        this.setState({ term : event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.searchMovies(this.state.term);
        this.setState({ term: ''});
    }

	render(){
        const results = this.props.moviesResults.searchMovies;
		return(
            <div>
			<form onSubmit={(e) => this.onFormSubmit(e)} className="form-inline">
    				<input 
    				className="form-control mr-sm-2" 
    				type="search" 
    				placeholder="Search" 
    				aria-label="Search"
    				value={this.state.term} 
    				onChange={this.onInputChange}
    				 />
    				<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  			</form>

            <div className="container">
                       
                        <ul className="row">
                            { results.map(
                                result => <MovieInfo result={ result } selectMovie={(result) => this.props.selectMovie(result)}/>
                            )}
                        </ul>
                    </div>
            </div>
			);
	}
}

class MovieInfo extends Component {
    render() {
        const { result } = this.props;
        return (

            <li
                key={result.id}
                onClick={() => this.props.selectMovie(result)}
                className="col-md-6">
                <Link to={`/movies/${result.id}/details`}>
                    <img src={`http://image.tmdb.org/t/p/w185/${result.poster_path}`} key={result.id}/>
                    <h3>{result.title}</h3>
                    <p>Rating: {result.vote_average}</p>
                </Link>
            </li>
        )
    }
}

const mapDispatchToProps = dispatch => {
  return {
   selectMovie: (movie) => dispatch(selectMovie(movie)),
   searchMovies: (term) => dispatch(searchMovies(term))
};
};

function mapStateToProps(state){
  return{
    moviesResults: state.searchMovies
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (SearchBar);