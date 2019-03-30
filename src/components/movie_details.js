import React, { Component } from 'react';
import { connect } from 'react-redux';
import { videoMovie } from '../actions/index';



class MovieDetails extends Component{
	constructor(props){
	   super(props);
	   this.goBack = this.goBack.bind(this);
	}

	goBack(){
	    this.props.history.goBack();
	}

	componentDidMount(){
		this.props.videoMovie(this.props.movie.id);
	}

	render(){
		const video = this.props.video.videoMovie;
		const key = video[0] ? video[0].key : undefined;
		
		if(key == undefined){
			return(
				<div className="detail">
				<img id="mvimg" src={`http://image.tmdb.org/t/p/w185/${this.props.movie.poster_path}`} key={this.props.movie.id}/>
				<div className="card mb-3" >
				<div className="card-bg" />
			  		<div className="card-body">
			    		<h5 className="card-title">{this.props.movie.title}</h5>
			    		<h6><strong>Overview:</strong></h6>
			    			<p className="card-text">{this.props.movie.overview}</p>
			    			<p>Rating: {this.props.movie.vote_average}</p>
			    			<p>Relase date: {this.props.movie.release_date}</p>
			    			<button onClick={this.goBack} type="button" className="btn btn-warning">Back</button>
			  		</div>
				</div>
			</div>
				);
		} else {
			return(
				<div className="detail">
			<div className="embed-responsive embed-responsive-16by9">
  			<iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${key}`} key={this.props.movie.id}></iframe>
			</div>
				<div className="card mb-3" >
				<div className="card-bg" />
			  		<div className="card-body">
			    		<h5 className="card-title">{this.props.movie.title}</h5>
			    		<h6><strong>Overview:</strong></h6>
			    			<p className="card-text">{this.props.movie.overview}</p>
			    			<p>Rating: {this.props.movie.vote_average}</p>
			    			<p>Relase date: {this.props.movie.release_date}</p>
			    			<button onClick={this.goBack} type="button" className="btn btn-warning">Back</button>
			  		</div>
				</div>
			</div>
				);
		}
	} 
}

const mapDispatchToProps = dispatch => {
  return {
   videoMovie: (id) => dispatch(videoMovie(id))
};
};

function mapStateToProps(state){
	return{
		movie: state.activeMovie,
		video: state.videoMovie
	};

}

export default connect(mapStateToProps, mapDispatchToProps) (MovieDetails);