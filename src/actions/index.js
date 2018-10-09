import axios from 'axios';

export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const RECEIVE_TV = 'RECEIVE_TV';
export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const SEARCH_SHOWS = 'SEARCH_SHOWS';

const API_KEY = '540ae0350b2b2b29fea22a8a8552135e';
const ROOT_URL = 'https://api.themoviedb.org/3/movie/top_rated?page=1&language=en-US&api_key=';
const MOVIE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&query=`;
const TV_URL = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&query=`;

export function topMovies() {
	return (dispatch) => {
    axios
      .get(`${ROOT_URL}${API_KEY}`)
      .then((res) => {
    		const results = res.data.results;

        dispatch({
          type: RECEIVE_MOVIES,
          payload: results
        });

      });
	};
}

export function topTv(){
	return (dispatch) => {
	axios
	  .get('https://api.themoviedb.org/3/tv/top_rated?api_key=540ae0350b2b2b29fea22a8a8552135e&language=en-US&page=1')
	  .then((res) => {
	  		const results = res.data.results;

	  	dispatch({
	  		type: RECEIVE_TV,
	  		payload: results
	  	});
	  });
	};
}

export function searchMovies(movie) {
	return(dispatch) => {
		axios
		 .get(`${MOVIE_URL}${movie}`)
		 .then((res) => {
		 	const results = res.data.results;

		 dispatch({
		 	type: SEARCH_MOVIES,
		 	payload: results
		 });
		 });
	}
}

export function searchShows(show) {
	return(dispatch) => {
		axios
		 .get(`${TV_URL}${show}`)
		 .then((res) => {
		 	const results = res.data.results;

		 dispatch({
		 	type: SEARCH_SHOWS,
		 	payload: results
		 });
		 });
	}
}

export function selectMovie(movie) {
	return {
		type: 'MOVIE_SELECTED',
		payload: movie
	};
}

export function selectTv(show) {
	return {
		type: 'TV_SELECTED',
		payload: show
	};
}