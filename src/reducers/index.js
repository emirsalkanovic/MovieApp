import { combineReducers } from 'redux';

import ActiveMovie from './reducer_active_movie';
import ActiveTv from './reducer_active_tv';
import Movies from './movies_reducer';
import Shows from './reducer_tv';
import SearchMovies from './reducer_movie_search';
import SearchShows from './reducer_show_search';

const rootReducer = combineReducers ({
	movies: Movies,
	shows: Shows,
	activeMovie: ActiveMovie,
	activeTv: ActiveTv,
	searchMovies: SearchMovies,
	searchShows: SearchShows
});

export default rootReducer;
