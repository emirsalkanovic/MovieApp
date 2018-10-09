import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetails extends Component{
	constructor(props){
	   super(props);
	   this.goBack = this.goBack.bind(this);
	}

	goBack(){
	    this.props.history.goBack();
	}
	render(){
			return (
			<div>
				<img src={`http://image.tmdb.org/t/p/w185/${this.props.movie.poster_path}`} key={this.props.movie.id}/>
				<h3>{this.props.movie.title}</h3>
				<p>Rating: {this.props.movie.vote_average}</p>
				<h4>PLOT:</h4>
				<p>{this.props.movie.overview}</p>
				<button onClick={this.goBack} type="button" className="btn btn-primary">Back</button>
			</div>
		);
	} 
}

function mapStateToProps(state){
	return{
		movie: state.activeMovie
	};

}

export default connect(mapStateToProps) (MovieDetails);