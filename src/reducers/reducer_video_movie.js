const INITIAL_STATE = {
  videoMovie: []
};

export default function (state = INITIAL_STATE, action) {
	switch(action.type){
		case 'VIDEO_MOVIE':

		return{
			...state,
			videoMovie: action.payload
		};
	}

		return state;
	
}