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
				<img id="mvimg" src={`http://image.tmdb.org/t/p/w185/${this.props.movie.poster_path}`} key={this.props.movie.id}/>
				<div className="card text-white bg-secondary mb-3" >
			  		<div className="card-body">
			    		<h5 className="card-title">{this.props.movie.name}</h5>
			    		<h6>Overview:</h6>
			    			<p className="card-text">{this.props.movie.overview}</p>
			    			<p>Rating: {this.props.movie.vote_average}</p>
			    			<button onClick={this.goBack} type="button" className="btn btn-primary">Back</button>
			  		</div>
				</div>
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