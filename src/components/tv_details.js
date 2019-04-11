import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { videoShow } from '../actions/index';

class TvShowDetails extends Component{
	constructor(props){
	   super(props);
	   this.goBack = this.goBack.bind(this);
	}

	goBack(){
	    this.props.history.goBack();
	}
	componentDidMount(){
		this.props.videoShow(this.props.show.id);
	}

	render(){
		const video = this.props.video.videoShow;
		const key = video[0] ? video[0].key : undefined;
		
		
		if (key == undefined){ 
			return(
				<div className="detail">
					
					<img id="tvimg" src={`http://image.tmdb.org/t/p/w185/${this.props.show.poster_path}`} key={this.props.show.id} />
					<div className="card mb-3" >
					  <div className="card-bg" />
					  <div className="card-body">
					    <h5 className="card-title">{this.props.show.name}</h5>
					    <h6><strong>Overview:</strong></h6>
					    <p className="card-text">{this.props.show.overview}</p>
					    <p>Rating: {this.props.show.vote_average}</p>
					    <p>Release date: {this.props.show.first_air_date}</p>
					    <button onClick={this.goBack} type="button" className="btn btn-warning">Back</button>
					  </div>
					</div>
				</div>
			);
		} else {
			return(
				<div className="detail">
					<div className="embed-responsive embed-responsive-16by9">
  						<iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${key}`} key={this.props.show.id}></iframe>
					</div>
					<div className="card mb-3" >
					<div className="card-bg" />
					  <div className="card-body">
			    		<h5 className="card-title">{this.props.show.name}</h5>
			    		<h6><strong>Overview:</strong></h6>
			    		<p className="card-text">{this.props.show.overview}</p>
			    		<p>Rating: {this.props.show.vote_average}</p>
			    		<p>Release date: {this.props.show.first_air_date}</p>
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
   videoShow: (id) => dispatch(videoShow(id))
};
};

function mapStateToProps(state){
	return{
		show: state.activeTv,
		video: state.videoShow
	};

}

export default connect(mapStateToProps, mapDispatchToProps) (TvShowDetails);
