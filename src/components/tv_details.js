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
			
			<img id="tvimg" src={`http://image.tmdb.org/t/p/w185/${this.props.show.poster_path}`} key={this.props.show.id} />
			
			<div className="card text-white bg-secondary mb-3" >
			  <div className="card-body">
			    <h5 className="card-title">{this.props.show.name}</h5>
			    <h6>Overview:</h6>
			    <p className="card-text">{this.props.show.overview}</p>
			    <p>Rating: {this.props.show.vote_average}</p>
			    <button onClick={this.goBack} type="button" className="btn btn-primary">Back</button>
			  </div>
			</div>
		</div>

			


			///<img src={`http://image.tmdb.org/t/p/w185/${this.props.show.poster_path}`} key={this.props.show.id}/>
			///<h3>{this.props.show.name}</h3>
			///<p>Rating: {this.props.show.vote_average}</p>
			///<h4>PLOT:</h4>
			///<p>{this.props.show.overview}</p>
			///<button onClick={this.goBack} type="button" className="btn btn-primary">Back</button>
		
		);
	}
}

function mapStateToProps(state){
	return{
		show: state.activeTv
	};

}

export default connect(mapStateToProps) (TvShowDetails);
