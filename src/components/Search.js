import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchShows, searchMovies} from '../actions/index';


class Search extends Component{
	constructor(props){
        super(props);

        this.state = { term : ''};

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({ term : event.target.value });

        if(this.state.term.length > 1){
        this.props.searchMovies(this.state.term);
        this.props.searchShows(this.state.term);
    		}
        }

	render(){
		return(
			<div>
            	<form className="form-inline">
                    <input 
                    className="form-control mr-sm-2" 
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search"
                    value={this.state.term} 
                    onChange={(e) => this.onInputChange(e)}
                     />
            	</form>
            </div>
			);
	}
}

const mapDispatchToProps = dispatch => {
	return{
		searchMovies: (term) => dispatch(searchMovies(term)),
		searchShows: (term) => dispatch(searchShows(term))
	}
}

export default connect(null, mapDispatchToProps) (Search);