import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTv, searchShows } from '../actions/index';
import { Link } from 'react-router-dom';

class SearchBarTV extends Component{
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

        this.props.searchShows(this.state.term);
        this.setState({ term: ''});
    }

	render(){
        
        const results = this.props.showsResults.searchShows;
		return(
            <div>
			<form onSubmit={(e) => this.onFormSubmit(e)} className="form-inline">
    				<input 
    				className="form-control mr-sm-2" 
    				type="search" 
    				placeholder="Search" 
    				aria-label="Search"
    				value={this.state.term} 
    				onChange={this.onInputChange} />

    				
    				<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  			</form>

            <div className="container">
                       
                        <ul className="row">
                            { results.map(
                                result => <ShowInfo result={ result } selectTv={(result) => this.props.selectTv(result)}/>
                            )}
                        </ul>
                    </div>
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
   selectTv: (show) => dispatch(selectTv(show)),
   searchShows: (term) => dispatch(searchShows(term))
};
};

function mapStateToProps(state){
  return{
    showsResults: state.searchShows
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (SearchBarTV);