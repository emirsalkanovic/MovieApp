import React, { Component } from 'react';
import { connect } from 'react-redux';

class TvShowDetails extends Component{
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
			
			<img src={`http://image.tmdb.org/t/p/w185/${this.props.show.poster_path}`} key={this.props.show.id}/>
			<h3>{this.props.show.name}</h3>
			<p>Rating: {this.props.show.vote_average}</p>
			<h4>PLOT:</h4>
			<p>{this.props.show.overview}</p>
			<button onClick={this.goBack} type="button" className="btn btn-primary">Back</button>
		</div>
		);
	}
}

function mapStateToProps(state){
	return{
		show: state.activeTv
	};

}

export default connect(mapStateToProps) (TvShowDetails);
