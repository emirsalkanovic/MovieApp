const INITIAL_STATE = {
  searchMovies: []
};

export default function (state = INITIAL_STATE, action) {
	switch(action.type){
		case 'SEARCH_MOVIES':

		return{
			...state,
			searchMovies: action.payload
		};
	}

		return state;
	
}