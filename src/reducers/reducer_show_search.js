const INITIAL_STATE = {
  searchShows: []
};

export default function (state = INITIAL_STATE, action) {
	switch(action.type){
		case 'SEARCH_SHOWS':
		
		return{
			...state,
			searchShows: action.payload
		};
	}

		return state;
	
}