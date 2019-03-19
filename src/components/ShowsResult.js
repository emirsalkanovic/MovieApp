import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTv, searchShows } from '../actions/index';
import { Link } from 'react-router-dom';


class ShowsResult extends Component{

	render(){
		const results = this.props.showsResults.searchShows;
		return(
			<div className="container">
                <ul className="row">
                    { results.map(
                        result => <ShowInfo result={ result } selectTv={(result) => this.props.selectTv(result)}/>
                    )}
                </ul>
            </div>
			);
	}
}

class ShowInfo extends Component {
    render() {
        const { result } = this.props;
        return (

            <li
                key={result.id}
                onClick={() => this.props.selectTv(result)}
                className="col-md-6 form-group">
                <Link to={`/${result.id}/details`}>
                    <img src={`http://image.tmdb.org/t/p/w185/${result.poster_path}`} key={result.id}/>
                    <h3>{result.name}</h3>
                    <p>Rating: {result.vote_average}</p>
                </Link>
            </li>
        )
    }
}

const mapDispatchToProps = dispatch => {
  return {
   selectTv: (show) => dispatch(selectTv(show))
};
};

function mapStateToProps(state){
  return{
    showsResults: state.searchShows
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (ShowsResult);