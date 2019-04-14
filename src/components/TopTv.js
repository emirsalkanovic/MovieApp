import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTv, topTv } from '../actions/index';

import { Link } from 'react-router-dom';

class TopTv extends Component{
	render(){
		const shows = this.props.shows.tvData;
		return(
			<div className="container">
				<h1><i className="fa fa-film" aria-hidden="true"></i> 10 TOP RATED TV SHOWS</h1>
				<ul className="row">
					{ shows.slice(0, 10).map(
						show => <TVInfo show={ show } selectTv={(show) => this.props.selectTv(show)} /> 
					)}
				</ul>
			</div>
			);
	}
}

class TVInfo extends Component {
	render() {
		const { show } = this.props;
		return (
			<li
				key={show.id}
				onClick={() => this.props.selectTv(show)}
				className="col-md-6 form-group object">
				<Link to={`/${show.id}/details`}>
					<img src={`http://image.tmdb.org/t/p/w185/${show.poster_path}`} key={show.id}/>
					<h3>{show.name}</h3>
					<p>Rating: {show.vote_average}</p>
				</Link>
			</li>
		)
	}
}

const mapDispatchToProps = dispatch => {
  return {
  	selectTv: (show) => {
    	dispatch(selectTv(show))
    },
    getShows: dispatch(topTv())
  };
};

function mapStateToProps(state){
  return{
    shows: state.shows
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (TopTv);